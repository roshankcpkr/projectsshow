import Search from "./components/search/Search";
import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./API";
import Forecast from "./components/forecast-weather/Forecast";
import Logo from "./components/logo/Logo";

function App() {
  // Set the state
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // Search for the city
    const [lat, lon] = searchData.value.split("");
    // Get the current weather
    const fetchCurrentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // Get the forecast
    const fetchForecastWeather = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([fetchCurrentWeather, fetchForecastWeather])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        //Modify state
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Logo />
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
