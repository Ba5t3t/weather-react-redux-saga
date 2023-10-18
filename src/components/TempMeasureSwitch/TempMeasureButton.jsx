import React from "react";
import { StyledTempMeasureButton } from "./StyledTempMeasureSwitch";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_WEATHER } from "../../store/reducer";

export const TempMeasureButton = ({
  id,
  title,
  activeTempMeasureButton,
  setActiveTempMeasureButton,
}) => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weatherData.city);

  const handleClick = () => {
    setActiveTempMeasureButton(id);
    if (id === "celsius") {
      dispatch({
        type: FETCH_WEATHER,
        payload: {
          unit: "metric",
          city,
        },
      });
    } else if (id === "farenheit") {
      dispatch({
        type: FETCH_WEATHER,
        payload: {
          unit: "imperial",
          city,
        },
      });
    }
  };

  return (
    <StyledTempMeasureButton
      $activeTab={activeTempMeasureButton}
      onClick={handleClick}
    >
      {title}
    </StyledTempMeasureButton>
  );
};
