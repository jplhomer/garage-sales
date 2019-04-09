import { useEffect, useRef } from "react";
import mapboxgl, { DEFAULT_CENTER } from "../src/map";

export default function EditableLocationMap({ latLng, onChangeLocation }) {
  let mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: latLng.lat ? latLng : DEFAULT_CENTER,
      zoom: 12
    });

    map.on("load", () => {
      if (latLng.lat && latLng.lng) {
        const marker = new mapboxgl.Marker({ draggable: true }).setLngLat([latLng.lng, latLng.lat]).addTo(map);

        marker.on("dragend", () => onChangeLocation(marker.getLngLat()));
      }
    });

    return () => {
      map.remove();
    };
  }, [latLng]);

  return (
    <div className="mapContainer">
      <div className="map" ref={mapContainer} />
      <style jsx>{`
        .map {
          height: 200px;
          width: 100%;
        }

        @media (min-width: 500px) {
          .map {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
