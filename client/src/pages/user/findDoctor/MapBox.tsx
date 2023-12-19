import React, { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface TGeoLocation {
  long: number;
  lati: number;
}
const MapBox = () => {
  const [GeoLocaton, setGeoLocaton] = useState<TGeoLocation>({
    long: 0,
    lati: 0,
  });

  return (
    <>
      <Map
        mapLib={import("mapbox-gl")}
        mapboxAccessToken={import.meta.env.VITE_MAP_TOKEN}
        initialViewState={{
          longitude: GeoLocaton.long,
          latitude: GeoLocaton.lati,
          zoom: 4,
        }}
        style={{ width: "100%", height: "430px" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        attributionControl={false}
      >
        <Marker
          longitude={GeoLocaton.long}
          latitude={GeoLocaton.lati}
          draggable
        />
        <FullscreenControl />
        <NavigationControl position="top-left" />
        <GeolocateControl
          trackUserLocation
          position="bottom-left"
          onGeolocate={(e) => {
            setGeoLocaton({
              lati: e.coords.latitude,
              long: e.coords.longitude,
            });
          }}
          positionOptions={{ enableHighAccuracy: true }}
        />
        {/* <MapStyle /> */}
      </Map>
    </>
  );
};

export default MapBox;
