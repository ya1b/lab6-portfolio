import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log("API KEY:", import.meta.env.VITE_WEATHER_KEY);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log("DATA:", data);

        if (data.cod !== 200) {
          setWeather("error");
        } else {
          setWeather(data);
        }
      })
      .catch((err) => {
        console.log("ERROR:", err);
        setWeather("error");
      });
  }, []);

  return (
    <div>
      <h1>Welcome</h1>

      {/* ALWAYS SHOW SOMETHING */}
      {weather === null && <p>Loading weather...</p>}

      {weather === "error" && <p>Error loading weather</p>}

      {weather && weather !== "error" && (
        <div>
          <p><strong>City:</strong> {weather.name}</p>
          <p><strong>Temp:</strong> {weather.main.temp}°C</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}