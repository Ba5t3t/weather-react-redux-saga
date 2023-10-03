import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "./store/reducer";
import { CurrentWeather } from "./components/CurrentWeather/currentWeather";
import { TodayForecast } from "./components/TodayForecast/TodayForecast";
import { DateTime } from "./components/DateTime/DateTime";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className='app'>
      <CurrentWeather></CurrentWeather>
      <TodayForecast></TodayForecast>
      <DateTime></DateTime>
    </div>
  );
}

export default App;
