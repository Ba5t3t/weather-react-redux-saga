import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/reducer";
import { CurrentWeather } from "./components/CurrentWeather/currentWeather";
import { TodayForecast } from "./components/TodayForecast/TodayForecast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className='app'>
      <div></div>
      <CurrentWeather></CurrentWeather>
      <TodayForecast></TodayForecast>
    </div>
  );
}

export default App;
