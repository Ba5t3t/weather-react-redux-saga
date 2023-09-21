import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/reducer";

function App() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weatherData);
  const temp = weather?.temp;
  const city = weather?.city;

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className='app'>
      <div></div>

      <div className='current-weather-container'>
        <div className='card'>
          <div className='card-header'>
            <h2 className='card-title'>{city}</h2>
          </div>

          <div className='container-temperature'>
            <span id='temp'>{Math.ceil(temp)}</span>
          </div>

          <div className='container-toggle-buttons'>
            <span
              id='celsius-button'
              className='toggle-button right-border-none unit-enabled'
            >
              °C
            </span>
            <span id='fahrenheit-button' className='toggle-button left-border'>
              °F
            </span>
          </div>

          <div className=''>иконка состояния погоды</div>
        </div>
      </div>
      <div className='forecast'></div>
    </div>
  );
}

export default App;
