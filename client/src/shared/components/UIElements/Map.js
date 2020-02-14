import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";

const Map = props => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const { center, zoom } = props;

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamFpcmFnYSIsImEiOiJjanVnbDFjNXgwbXV4NDRwaTA2dDVuYm56In0.h4ZbMVSoFR2ma9-rlKK38g";
    const initializeMap = ({ setMap, mapContainer }) => {
      var map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: zoom
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, center, zoom]);

  return <div ref={el => (mapContainer.current = el)} className="map"></div>;
};

export default Map;
