import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (!city.trim()) {
      alert("Please enter city name");
      return;
    }

    setLoading(true);

    try {
      // City name -> Latitude & Longitude
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      );

      const locationData = await locationResponse.json();

      if (!locationData.results) {
        alert("City not found");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } =
        locationData.results[0];

      // Latitude & Longitude -> Weather
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
      );

      const weatherData = await weatherResponse.json();

      setWeather({
        name,
        country,
        temperature: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        code: weatherData.current.weather_code,
      });
    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={searchWeather}>
          Search
        </button>
      </div>

      {loading && <p>Loading weather...</p>}

      {weather && (
        <div className="weather-card">
          <h2>
            {weather.name}, {weather.country}
          </h2>

          <div className="temperature">
            {Math.round(weather.temperature)}°C
          </div>

          <p>💧 Humidity: {weather.humidity}%</p>

          <p>💨 Wind: {weather.wind} km/h</p>

          <p>🌤️ Weather Code: {weather.code}</p>

          <small>
            Weather data by Open-Meteo
          </small>
        </div>
      )}
    </div>
  );
}

export default App;