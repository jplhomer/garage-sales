import { useState } from "react";
import Button from "./Button";

export default function SaleForm() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Waukee");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="address">Street Address</label>
        <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="startTime">Start Time</label>
        <input type="time" id="startTime" value={startTime} onChange={e => setStartTime(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="endTime">End Time</label>
        <input type="time" id="endTime" value={endTime} onChange={e => setEndTime(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <Button type="submit">Add Garage Sale</Button>
    </form>
  );
}
