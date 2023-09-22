import React from "react";
import { useSelector } from "react-redux";

export const TodayForecast = () => {
  const weather = useSelector((state) => state.weatherData);
  const humidity = weather?.humidity;
  const visibility = weather?.visibility;
  const pressure = weather?.pressure;
  const wind = weather?.wind;
  const sunrise = weather?.sunrise;
  const sunset = weather?.sunset;

  return (
    <div className='forecast'>
      <h1 className='forecast-header'>Прогноз на сегодня</h1>
    </div>
  );
};

// humidity, visibility, pressure, wind speed, sunrise, sunset
