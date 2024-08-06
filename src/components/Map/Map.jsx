import React, { useEffect, useRef } from "react";
import styles from "./Map.module.css";

const MapComponent = () => {
  const mapRef = useRef(null);

  const key = import.meta.env.VITE_MAPS_KEY;
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 28.7197, lng: 77.0661 },
          zoom: 8,
        });

        new window.google.maps.Marker({
          position: { lat: 28.7197, lng: 77.0661 },
          map,
          title: "My Marker",
        });
      }
    };

    if (!window.google) {
      loadGoogleMaps();
    } else {
      initMap();
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

const Map = () => {
  return (
    <div className={styles.map}>
      <MapComponent />
    </div>
  );
};

export default Map;
