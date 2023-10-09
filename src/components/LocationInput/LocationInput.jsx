import React, { useState } from "react";
import { StyledDiv, StyledLocationInput } from "./StyledLocationInput";
import { useDispatch } from "react-redux";
import { fetchCity } from "../../store/cityReducer";
import classnames from "classnames";
// import "./input.style.css";
// import styles from "./input.style.css";

export const LocationInput = ({
  inputValue,
  setInputValue,
  handleInputEntering,
}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const handleSearch = (value) => {
    if (!/^[ЁёА-я]+$/.test(value)) {
      setError(true);
      return;
    }
    setError(false);
    setInputValue(value);
    console.log(value);
    dispatch(fetchCity(value));
  };

  return (
    <StyledDiv $error={error}>
      <StyledLocationInput
        type='search'
        placeholder='Введите город'
        value={inputValue}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleInputEntering}
      />
      {/* <div
        className={classnames(styles.class, styles.candy, styles.book, {
          error: error,
          [styles.error]: error,
        })}
      >
        Error
      </div> */}
    </StyledDiv>
  );
};
