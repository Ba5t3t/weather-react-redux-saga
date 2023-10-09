import React from "react";
import { StyledForecastContainer } from "./StylesTodayForecast";
import { TodaysTemp } from "../TodaysTemp/TodaysTemp";
import { Tabs } from "../Tabs/Tabs";

export const TodayForecast = () => {
  return (
    <>
      <StyledForecastContainer>
        <Tabs />
        <TodaysTemp />
      </StyledForecastContainer>
    </>
  );
};
