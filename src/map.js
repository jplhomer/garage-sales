import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_KEY;

export const DEFAULT_CENTER = {
  lat: 41.600446,
  lng: -93.853402
};

export default mapboxgl;
