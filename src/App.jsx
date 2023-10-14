import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/reducer";
import { CurrentWeather } from "./components/CurrentWeather/currentWeather";
import { TodayForecast } from "./components/TodayForecast/TodayForecast";
import { DateTime } from "./components/DateTime/DateTime";
import { useErrorModal } from "./components/ErrorModalProvider/ErrorModalProvider";
import { ErrorModal } from "./components/ErrorModal/ErrorModal";

function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.cities);
  const {toggleErrorModal, setErrorModal} = useErrorModal();

  useEffect(() => {
    dispatch(
      fetchWeather(
        localStorage.getItem("city")
          ? JSON.parse(localStorage.getItem("city"))
          : city,
          toggleErrorModal,
          setErrorModal
      )
    );
  }, [dispatch]);

  return (
    <div className='app'>
      
        <ErrorModal/>
        <CurrentWeather />
        <TodayForecast />
        <DateTime />
    </div>
  );
}

export default App;
