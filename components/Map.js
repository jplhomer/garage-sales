import { Component } from "react";

export default class Map extends Component {
  componentDidMount() {
    const mapboxgl = require("mapbox-gl");
    mapboxgl.accessToken = process.env.MAPBOX_KEY;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9"
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <>
        <div className="map" ref={el => (this.mapContainer = el)} />
        <style jsx>{`
          .map {
            height: 200px;
            width: 100%;
          }
        `}</style>
      </>
    );
  }
}
