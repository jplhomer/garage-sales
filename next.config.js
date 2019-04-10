/**
 * After the next require you can use process.env to get your secrets
 */
if (process.env.NODE_ENV !== "production") {
  require("now-env");
}

module.exports = {
  target: "serverless",
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    MAPBOX_KEY: process.env.MAPBOX_KEY
  }
};
