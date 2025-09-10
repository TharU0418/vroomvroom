'use client';
import React, { useState, useRef } from "react";

interface Location {
  latitude: number;
  longitude: number;
  timestamp: string;
}

const LOCATION_API = "https://fhs0zhr3p0.execute-api.eu-north-1.amazonaws.com/send/location"; // Replace with your actual API URL

function App() {
  const [tracking, setTracking] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const sendLocationToAPI = async (location: Location) => {
    try {
      const response = await fetch(LOCATION_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      });

      if (!response.ok) {
        console.error("Failed to send location:", await response.text());
      } else {
        console.log("Location sent successfully:", location);
      }
    } catch (error) {
      console.error("Error sending location:", error);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const timestamp = new Date().toISOString(); // use ISO format for backend
        const newLocation: Location = { latitude, longitude, timestamp };

        setLocations((prev) => [...prev, newLocation]);
        console.log("Location saved locally:", newLocation);

        sendLocationToAPI(newLocation); // Send to backend
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
    <div style={{ padding: 20, marginTop:150, color: 'white' }}>
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

export default App;
