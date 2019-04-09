import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export default function Map({ sales }) {
  mapboxgl.accessToken = process.env.MAPBOX_KEY;

  let mapContainer = useRef(null);

  const DEFAULT_CENTER = {
    lat: 41.600446,
    lng: -93.853402
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: {
        lat: DEFAULT_CENTER.lat,
        lng: DEFAULT_CENTER.lng
      },
      zoom: 12
    });

    map.on("load", () => {
      map.addLayer(generateSalePoints(sales));
      map.on("click", "sales", e => console.log(`Clicked on a sale`, e.features));
    });

    return () => {
      map.remove();
    };
  }, [sales]);

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
              coordinates: [sale.lng, sale.lat]
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
