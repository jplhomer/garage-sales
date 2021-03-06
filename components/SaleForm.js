import { useState, useEffect } from "react";
import { useDebounce } from "../src/hooks";
import Button from "./Button";
import { addGarageSale } from "../api/sales";
import router from "next/router";
import { getLatLngForAddress } from "../api/geocoder";
import dynamic from "next/dynamic";
import TimeInput from "./TimeInput";
const DynamicEditableLocationMap = dynamic(import("./EditableLocationMap"), { ssr: false });

export default function SaleForm() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Waukee");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [latLng, setLatLng] = useState({ lat: "", lng: "" });

  const debouncedAddress = useDebounce(address, 500);
  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    async function fetchLatLng() {
      if (!debouncedAddress.length) return;

      const response = await getLatLngForAddress(`${debouncedAddress}, ${debouncedCity} IA`);
      if (!response) return;

      const { lat, lng } = response;
      setLatLng({ lat, lng });
    }

    fetchLatLng();
  }, [debouncedAddress, debouncedCity]);

  const handleSubmit = async e => {
    e.preventDefault();

    await addGarageSale({
      address,
      city,
      startTime,
      endTime,
      description,
      ...latLng
    });

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <div className="main">
          <div className="field">
            <label htmlFor="address">Street Address</label>
            <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="startTime">Start Time</label>
            <TimeInput id="startTime" value={startTime} onChange={setStartTime} required />
          </div>
          <div className="field">
            <label htmlFor="endTime">End Time</label>
            <TimeInput id="endTime" value={endTime} onChange={setEndTime} required />
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
        </div>
        <div className="side">
          <div className="field">
            <label>Drag the pin to match your location</label>
            <DynamicEditableLocationMap latLng={latLng} onChangeLocation={setLatLng} />
          </div>
        </div>
      </div>
      <Button type="submit">Add Garage Sale</Button>
      <style jsx>{`
        @media (min-width: 800px) {
          .grid {
            display: flex;
          }

          .side {
            width: 40%;
          }

          .main {
            flex-grow: 1;
            padding-right: 1rem;
          }
        }
      `}</style>
    </form>
  );
}
