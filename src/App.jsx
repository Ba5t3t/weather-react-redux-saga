import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/reducer";
import { CurrentWeather } from "./components/CurrentWeather/currentWeather";
import { TodayForecast } from "./components/TodayForecast/TodayForecast";
import { DateTime } from "./components/DateTime/DateTime";
import { Modal } from "./components/Modal/modal";

function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(
      fetchWeather(
        localStorage.getItem("city")
          ? JSON.parse(localStorage.getItem("city"))
          : city
      )
    );
  }, [dispatch]);

  return (
    <div className='app'>
      <Modal />
      <CurrentWeather />
      <TodayForecast />
      <DateTime />
    </div>
  );
}

export default App;
