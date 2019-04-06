import { useEffect, useRef } from "react";

export default function Map({ sales }) {
  if (!process.browser) return "";
  const mapboxgl = require("mapbox-gl");
  mapboxgl.accessToken = process.env.MAPBOX_KEY;

  let mapContainer = useRef(null);

  const DEFAULT_CENTER = {
    latitude: 41.5986522,
    longitude: -93.9351638
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: {
        lat: DEFAULT_CENTER.latitude,
        lng: DEFAULT_CENTER.longitude
      },
      zoom: 12
    });

    return () => {
      map.remove();
    };
  });

  return (
    <>
      <div className="map" ref={mapContainer} />
      <style jsx>{`
        .map {
          height: 300px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
