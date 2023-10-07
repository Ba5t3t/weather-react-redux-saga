import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setWeather } from "./store/reducer";
import { CurrentWeather } from "./components/CurrentWeather/currentWeather";
import { TodayForecast } from "./components/TodayForecast/TodayForecast";
import { DateTime } from "./components/DateTime/DateTime";

function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weatherData);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  }, [weather]);

  return (
    <div className='app'>
      <CurrentWeather></CurrentWeather>
      <TodayForecast></TodayForecast>
      <DateTime></DateTime>
    </div>
  );
}

export default App;
