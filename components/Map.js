import { useEffect, useRef } from "react";
import mapboxgl, { DEFAULT_CENTER } from "../src/map";

export default function MapComponent({ sales, selectedSale }) {
  let mapContainer = useRef(null);
  let markers = useRef(new Map());

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: DEFAULT_CENTER,
      zoom: 12
    });

    map.on("load", () => {
      sales.forEach(sale => {
        const marker = new mapboxgl.Marker()
          .setLngLat([sale.lng, sale.lat])
          .addTo(map)
          .setPopup(new mapboxgl.Popup().setHTML(sale.htmlDescription));

        markers.current.set(sale.id, marker);
      });
      map.on("click", "sales", e => console.log(`Clicked on a sale`, e.features));
    });

    return () => {
      map.remove();
    };
  }, [sales]);

  useEffect(() => {
    if (!markers.current.has(selectedSale.id)) return;

    markers.current.get(selectedSale.id).togglePopup();

    return () => {};
  }, [selectedSale]);

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

        @media (min-width: 900px) {
          .map,
          .map-container {
            height: calc(100vh - 50px);
          }
        }
      `}</style>
    </div>
  );
}
