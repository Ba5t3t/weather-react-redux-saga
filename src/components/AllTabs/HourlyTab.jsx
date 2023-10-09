import React from "react";
import { useSelector } from "react-redux";

import {
  ForecastContainer,
  StyledTable,
  StyledTableHeaders,
  StyledTableCell,
} from "../TodayForecast/StylesTodayForecast";

export const HourlyTab = () => {
  const weather = useSelector((state) => state.weatherData);
  const visibility = weather?.visibility;
  const feelsLike = weather?.feelsLike;

  return (
    <ForecastContainer>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTableCell>ощущается как </StyledTableCell>
            <StyledTableHeaders>{Math.round(feelsLike)}°С</StyledTableHeaders>
          </tr>
          <tr>
            <StyledTableCell>видимость</StyledTableCell>
            <StyledTableHeaders>{visibility / 1000} км</StyledTableHeaders>
          </tr>
          <tr>
            <StyledTableCell>-</StyledTableCell>
            <StyledTableHeaders>-</StyledTableHeaders>
          </tr>
        </tbody>
      </StyledTable>
    </ForecastContainer>
  );
};
