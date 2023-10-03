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
  const handleClick = () => {
    setToggle(!toggle);
  };

  if (toggle) {
    return (
      <>
        <StyledLocationIcon
          onClick={handleClick}
          src={LocationIcon}
          alt=''
          height={30}
        />
        <LocationInput type='text' />
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
