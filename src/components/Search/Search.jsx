import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useErrorModal } from "../ErrorModalProvider/ErrorModalProvider";

import LocationIcon from "../../icons/location.svg";
import { LocationText, StyledLocationIcon, List, Select } from "./StyledSearch";

import { fetchWeather } from "../../store/reducer";
import { LocationInput } from "../LocationInput/LocationInput";

export const Search = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state?.citiesData);
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {toggleErrorModal, setErrorModal} = useErrorModal();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleInputEntering = (e) => {
    if (e.key === "Enter") {
      handleIconClick();
    }
  };

  const chooseCity = (city) => () => {
    dispatch(fetchWeather(city, toggleErrorModal, setErrorModal));
    setToggle(false);
    setInputValue("");
    localStorage.setItem("city", JSON.stringify(city));
  };

  if (toggle) {
    return (
      <>
        <StyledLocationIcon
          onClick={handleToggle}
          src={LocationIcon}
          alt=''
          height={30}
        />

        <LocationInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleInputEntering={handleInputEntering}
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
          onClick={handleToggle}
          src={LocationIcon}
          alt=''
          height={30}
        />
        <LocationText>Выбрать другой город</LocationText>
      </>
    );
  }
};
