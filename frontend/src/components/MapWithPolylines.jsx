import React, { useState, useContext } from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { AppContext } from "./AppContext";

const mapboxApi = process.env.REACT_APP_MAPBOX_API;

export default function MapWithPolylines(props) {
  const polylines = [
    props.polyline.map((coord) => [parseFloat(coord[1]), parseFloat(coord[0])]),
  ];

  const [viewport, setViewport] = useState({
    latitude: polylines[0][0][1],
    longitude: polylines[0][0][0],
    zoom: 10,
  });

  // Create GeoJSON for the polylines
  const geojsonData = {
    type: "FeatureCollection",
    features: polylines.map((line) => {
      return {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: line,
        },
      };
    }),
  };

  return (
    <Map
      initialViewState={viewport}
      style={{
        width: "100%",
        height: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken={mapboxApi}
      onMove={(evt) => setViewport(evt.viewState)}
      scrollZoom={false} // Disable scroll zoom
      dragPan={false} // Disable dragging (panning)
      doubleClickZoom={false} // Disable zoom on double-click
      touchZoomRotate={false} // Disable touch-based zoom and rotate
    >
      {/* Add the polylines as a source */}
      <Source id="polylineSource" type="geojson" data={geojsonData}>
        <Layer
          id="polylineLayer"
          type="line"
          paint={{
            "line-color": "#d50000",
            "line-width": 3,
          }}
        />
      </Source>
    </Map>
  );
}
