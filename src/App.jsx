import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/reducer";
import { CurrentWeather } from "./components/CurrentWeather/currentWeather";
import { TodayForecast } from "./components/TodayForecast/TodayForecast";
import { DateTime } from "./components/DateTime/DateTime";
import { ErrorModalProvider } from "./components/Modal/ErrorModalProvider";

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
      <ErrorModalProvider>
        <CurrentWeather />
        <TodayForecast />
        <DateTime />
      </ErrorModalProvider>
    </div>
  );
}

export default App;
