import fetch from "unfetch";

export async function getLatLngForAddress(address) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
    process.env.GOOGLE_MAPS_API_KEY
  }`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK" && data.results.length) {
      return data.results[0].geometry.location;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
}
