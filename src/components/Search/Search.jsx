import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LocationIcon from "../../icons/location.svg";
import {
  LocationInput,
  LocationText,
  StyledLocationIcon,
  List,
  Select,
} from "./StyledSearch";

import { fetchCity } from "../../store/cityReducer";
import { fetchWeather } from "../../store/reducer";

export const Search = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state?.citiesData);
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleIconClick = () => {
    setToggle(!toggle);
  };

  const handleInputEntering = (e) => {
    if (e.key === "Enter") {
      handleIconClick();
    }
  };

  const handleSearch = (value) => {
    setInputValue(value);
    dispatch(fetchCity(value));
  };

  const chooseCity = (city) => () => {
    setInputValue(city);
    dispatch(fetchWeather(city));
    setToggle(false);
    setInputValue("");
  };

  if (toggle) {
    return (
      <>
        <StyledLocationIcon
          onClick={handleIconClick}
          src={LocationIcon}
          alt=''
          height={30}
        />
        <LocationInput
          type='search'
          placeholder='Введите город'
          value={inputValue}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleInputEntering}
        />

        <Select>
          <List>
            {cities.map((city) => (
              <li onClick={chooseCity(city.name)} key={city.id}>
                {city.name}
              </li>
            ))}
          </List>
        </Select>
      </>
    );
  } else {
    return (
      <>
        <StyledLocationIcon
          onClick={handleIconClick}
          src={LocationIcon}
          alt=''
          height={30}
        />
        <LocationText>Выбрать другой город</LocationText>
      </>
    );
  }
};
