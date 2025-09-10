'use client';
import React, { useState, useRef } from "react";

interface Location {
  latitude: number;
  longitude: number;
  timestamp: string;
}

function Map() {
  const [tracking, setTracking] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const timestamp = new Date().toLocaleString();
        const newLocation: Location = { latitude, longitude, timestamp };
        setLocations((prev) => [...prev, newLocation]);
        console.log("Location saved:", newLocation);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  };

  const startRide = () => {
    if (tracking) return;
    setTracking(true);
    getLocation(); // Save immediately
    intervalRef.current = setInterval(getLocation, 2 * 60 * 1000); // Every 2 minutes
  };

  const stopRide = () => {
    setTracking(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div style={{ padding: 20, marginTop: 150, color:'white' }}>
      <h1>Ride Tracker</h1>
      <button onClick={startRide} disabled={tracking}>
        Start the Ride
      </button>
      <button onClick={stopRide} disabled={!tracking} style={{ marginLeft: 10 }}>
        Stop the Ride
      </button>

      <h2>Saved Locations:</h2>
      <ul>
        {locations.map((loc, index) => (
          <li key={index}>
            {index + 1}: ({loc.latitude}, {loc.longitude}) at {loc.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Map