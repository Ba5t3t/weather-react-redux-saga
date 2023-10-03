import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SwitchTemp } from "../../components/SwitchTemp/SwitchTemp";
import { Weekday } from "../Weekday/Weekday";
import { Time } from "../Time/Time";

import Celcius from "../../icons/celcius.svg";
import Fahrenheit from "../../icons/fahrenheit.svg";
import TempIcon from "../../icons/cloudy.svg";
import LocationIcon from "../../icons/location.svg";

export const CurrentWeather = () => {
  const weather = useSelector((state) => state.weatherData);
  const temperature = weather?.temp;
  const city = weather?.city;
  const feelsLike = weather?.feelsLike;
  const description = weather?.description;
  const icon = weather?.icon;

  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='current-weather-container'>
      <div className='card'>
        <div className='current-weather-temperature'>
          <div className='temperature'>
            {Math.round(temperature)}
            {"°"}
          </div>

          <div className='description'>
            <img src={TempIcon} alt='' height={30} />
            <span>{description}</span>
          </div>
        </div>

        <div className='card-header'>
          <p className='card-title'>{city}</p>
        </div>

        <div className='location'>
          <img src={LocationIcon} alt='' height={30} />
          <p>Другой город</p>
        </div>

        {/* <Weekday></Weekday>
        <Time></Time>

        <div>{icon}</div>

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
