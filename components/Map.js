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

    map.on("load", () => {
      map.addLayer(generateSalePoints(sales));
      map.on("click", "sales", e =>
        console.log(`Clicked on a sale`, e.features)
      );
    });

    return () => {
      map.remove();
    };
  }, [sales]);

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

function generateSalePoints(sales) {
  return {
    id: "sales",
    type: "symbol",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: sales.map(sale => {
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [sale.longitude, sale.latitude]
            },
            properties: {
              icon: "circle"
            }
          };
        })
      }
    },
    layout: {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }
  };
}
