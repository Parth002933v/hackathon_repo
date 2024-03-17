import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/event/fetch"
        );
        console.log(response);
        setEvents(response.data.events);
      } catch (error) {
        setError(error);
      }
    };

    fetchEvents();
  }, []);

  if (error) {
    return <div >Error: {error.message}</div>;
  }

  return (
    <>
      <div className="card_body cursor-pointer">
        {events.map((item, index) => (
          <Link
            to={{
              pathname: "./Description",
              search: `?id=${item._id}`,
              state: { event: item },
            }}
            key={index}
          >
            <div className="card w-[250px]" key={index}>
              <Card sx={{ width: 450, height: 350 }}>
                {/* 1 */}
                <CardMedia
                  className="card_image"
                  component="img"
                  alt={item.imagePath}
                  image={`http://localhost:8080/api/${item.imagePath}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <p className="mb-4 mt-2 font-sans">{item.name}</p>
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary">
                    <p className="mt-4 mb-4 text-lg">
                      <b className="font-sans">Date:-</b> {item.date}
                    </p>
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary">
                    <p className="mt-4 mb-4 text-lg">
                      <b className="font-sans">Time:-</b> {item.time}
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
