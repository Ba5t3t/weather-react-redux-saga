import React from "react";
import { useSelector } from "react-redux";

export const CurrentWeather = () => {
  const weather = useSelector((state) => state.weatherData);
  const temperature = weather?.temp;
  const city = weather?.city;
  const feelsLike = weather?.feelsLike;
  const description = weather?.description;
  const icon = weather?.icon;

  return (
    <div className='current-weather-container'>
      <div className='card'>
        <div className='card-header'>
          <h2 className='card-title'>{city}</h2>
        </div>

        <div className='container-temperature'>
          <span>{Math.round(temperature)}</span>
        </div>
        <div>{icon}</div>
        <span>{description}</span>
        <div className='noclass'>
          <span>ощущается как {feelsLike}</span>
        </div>

        <div className='container-button'>
          <button>кнопка</button>
        </div>

        <div className=''></div>
      </div>
    </div>
  );
};

// feels_like, weather description + icon, °C
