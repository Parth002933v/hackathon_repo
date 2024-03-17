import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dis, setDis] = useState("");
  const [image, setImage] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("description", dis); // Corrected the key name to match the backend
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/event/insert", // Changed the URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setStatusMessage(response.data.message);
    } catch (error) {
      console.error("Error saving form data:", error);
      setStatusMessage("Error saving form data");
    }
  };

  return (
    <div className="border-2 border-indigo-600 m-10">
      <h1 className="text-4xl text-center mt-2">
        <b>Admin Page</b>
      </h1>
      <form action="" className="ml-10" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Event Name:- </label>
          <input
            type="text"
            name="e_name"
            id="e_name"
            value={name}
            className="border border-indigo-600 rounded-md m-5"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Event Date:- </label>
          <input
            type="date"
            name="e_date"
            id="e_date"
            value={date}
            className="border border-indigo-600 rounded-md m-5"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Event Time:- </label>
          <input
            type="time"
            name="e_time"
            id="e_time"
            value={time}
            className="border border-indigo-600 rounded-md m-5"
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Event Description:- </label>
          <textarea
            name="e_dis"
            id="e_dis"
            value={dis}
            className="border border-indigo-600 rounded-md m-5"
            onChange={(e) => setDis(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Event Image:- </label>
          <input
            type="file"
            className="m-5"
            name="e_image"
            id="e_image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="border border-indigo-600 w-[100px] rounded-md m-5"
        >
          Submit
        </button>
      </form>
      {statusMessage && (
        <p className="text-center text-green-500 mt-5">{statusMessage}</p>
      )}
    </div>
  );
};

export default Admin;
