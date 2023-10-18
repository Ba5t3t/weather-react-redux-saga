import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_WEATHER } from "../../store/reducer";
import {
  SwitchInput,
  SwitchLabel,
  SwitchButton,
  Container,
} from "../SwitchTemp/StyledSwitch";

export const SwitchTemp = ({ id, toggled, onChange, image }) => {
  const dispatch = useDispatch();

  const switchTemperature = () => {
    if (toggled) {
      dispatch({ type: FETCH_WEATHER, payload: "metric" });
    } else {
      dispatch({ type: FETCH_WEATHER, payload: "imperial" });
    }
  };

  return (
    <>
      <Container>
        <SwitchInput
          id={id}
          type='checkbox'
          checked={toggled}
          onChange={onChange}
          onClick={switchTemperature}
        />
        <SwitchLabel htmlFor={id}>
          <SwitchButton image={image} />
        </SwitchLabel>
      </Container>
    </>
  );
};
