import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SwitchTemp } from "../../components/SwitchTemp/SwitchTemp";

import Celcius from "../../icons/celcius.svg";
import Fahrenheit from "../../icons/fahrenheit.svg";
import TempIcon from "../../icons/cloudy.svg";
import LocationIcon from "../../icons/location.svg";
import { Search } from "../Search/Search";

export const CurrentWeather = () => {
  const weather = useSelector((state) => state.weatherData);
  const temperature = weather?.temp;
  const city = weather?.city;
  const feelsLike = weather?.feelsLike;
  const description = weather?.description;
  const icon = weather?.icon;
  console.log(icon);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='current-weather-container'>
      <div className='card'>
        <div className='current-weather-temperature'>
          <div className='temperature'>
            {Math.round(temperature)}
            {"°С"}
          </div>

          <div className='description'>
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt={description}
              height={60}
              width={60}
            />
            <span>{description}</span>
          </div>
        </div>

        <div className='card-header'>
          <p className='card-title'>{city}</p>
        </div>

        <div className='location'>
          <Search></Search>
        </div>

        {/* 

        <div className='noclass'>
          <span>ощущается как {Math.round(feelsLike)}</span>
        </div>
        <SwitchTemp
          id='switch-temperature'
          toggled={isToggled}
          onChange={(e) => setIsToggled(e.target.checked)}
          image={TempIcon}
        ></SwitchTemp> */}
      </div>
    </div>
  );
};

// feels_like, weather description + icon, °C
