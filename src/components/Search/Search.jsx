import React from "react";
import { useState } from "react";
import LocationIcon from "../../icons/location.svg";
import {
  LocationInput,
  LocationText,
  StyledLocationIcon,
} from "./StyledSearch";

export const Search = () => {
  const [toggle, setToggle] = useState(false);
  const [city, setCity] = useState([]);

  const handleIconClick = () => {
    setToggle(!toggle);
  };

  const handleInputEntering = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setCity((city) => {
      return city.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    });
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
          value={city}
          onChange={handleSearch}
          onKeyDown={handleInputEntering}
        />
      </>
    );
  } else {
    return (
      <>
        <StyledLocationIcon
          onClick={handleClick}
          src={LocationIcon}
          alt=''
          height={30}
        />
        <LocationText>Выбрать другой город</LocationText>
      </>
    );
  }
};
