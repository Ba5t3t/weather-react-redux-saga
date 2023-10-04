import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LocationIcon from "../../icons/location.svg";
import {
  LocationInput,
  LocationText,
  StyledLocationIcon,
} from "./StyledSearch";

import { FETCH_CITY, fetchCity } from "../../store/cityReducer";

export const Search = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const cities = useSelector((state) => state?.citiesData);

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

        <div>
          <ul>
            {cities.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
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
