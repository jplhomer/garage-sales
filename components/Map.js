import { useEffect, useRef } from "react";
import mapboxgl, { DEFAULT_CENTER } from "../src/map";

export default function Map({ sales }) {
  let mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: DEFAULT_CENTER,
      zoom: 12
    });

    map.on("load", () => {
      sales.forEach(sale => {
        new mapboxgl.Marker()
          .setLngLat([sale.lng, sale.lat])
          .addTo(map)
          .setPopup(new mapboxgl.Popup().setHTML(sale.htmlDescription));
      });
      map.on("click", "sales", e => console.log(`Clicked on a sale`, e.features));
    });

    return () => {
      map.remove();
    };
  }, [sales]);

  return (
    <div className="map-container">
      <div className="map" ref={mapContainer} />
      <style jsx>{`
        .map {
          height: 200px;
          width: 100%;
        }

        @media (min-width: 500px) {
          .map,
          .map-container {
            height: calc(100vh - 77px);
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
