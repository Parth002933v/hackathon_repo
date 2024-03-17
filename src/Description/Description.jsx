import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Description = () => {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const eventId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/event/fetch?id=${eventId}`
        );
        // console.log(response); // clg ma data joieleje and krileje design
        setEvent(response.data.event);
      } catch (error) {
        setError(error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(event);
  return (
    <div>
      {event ? (
        <div>
          <div className="">
            {event.imagePath && (
              <img
                src={`http://localhost:8080/api/${event.imagePath}`}
                alt=""
                className="h-[20rem] w-full object-cover"
              />
            )}
          </div>

          {/* Event Other Details Sections */}
          <div className="mt-4 font-serif flex gap-52 ml-4">
            <div className="mt-2">
              <b className="text-2xl">Event Name:-</b>{" "}
              <span className="text-2xl">{event.name}</span>
            </div>
            <div className="mt-2">
              <b className="text-2xl">Event Date:-</b>{" "}
              <span className="text-2xl">{event.date}</span>
            </div>
            <div className="mt-2">
              <b className="text-2xl">Event Timing:-</b>{" "}
              <span className="text-2xl">{event.time}</span>
            </div>
          </div>
          <hr className="mt-5 border-black" />
          <div>
            <div className="mt-6 text-4xl flex justify-center font-serif underline-offset-1">
              <h1>Description Of Event</h1>
            </div>
            <div className="ml-4 text-lg">
              <span>{event.description}</span>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Description;
