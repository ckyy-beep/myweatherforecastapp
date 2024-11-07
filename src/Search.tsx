import React, { useState } from 'react';
import axios from 'axios';

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [temperature, setTemperature] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:32768/api/OpenWeatherMapApi/${city}`);
      setTemperature(response.data.temperature);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch weather data');
      setTemperature(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>

      {temperature !== null && (
        <div>
          <h2>Temperature in {city}: {temperature}°C</h2>
        </div>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Weather;
