import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_WEATHER } from "../../store/reducer";
import { Search } from "../Search/Search";
import { TempMeasureSwitch } from "../TempMeasureSwitch/TempMeasureSwitch";

export const CurrentWeather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weatherData);
  const city = weather?.city;
  const temperature = weather?.temp;
  const description = weather?.description;
  const icon = weather?.icon;
  /* 
  const [isToggled, setIsToggled] = useState(false);

  const switchTemperature = () => {
    if (isToggled) {
      dispatch({ type: FETCH_WEATHER, payload: "metric" });
    } else {
      dispatch({ type: FETCH_WEATHER, payload: "imperial" });
    }
  }; */

  return (
    <div className='current-weather-container'>
      <div className='card'>
        <div className='current-weather-temperature'>
          <div className='temperature'>
            {Math.round(temperature)}
            {"°"}
          </div>
          <div className='temperature-switch'>
            <TempMeasureSwitch></TempMeasureSwitch>
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
        ></SwitchTemp>
         */}
      </div>
    </div>
  );
};

// feels_like, weather description + icon, °C
