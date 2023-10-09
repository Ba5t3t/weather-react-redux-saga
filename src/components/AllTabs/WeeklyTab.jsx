import React from "react";
import { useSelector } from "react-redux";
import {
  ForecastContainer,
  StyledTable,
  StyledTableHeaders,
  StyledTableCell,
} from "../TodayForecast/StylesTodayForecast";

export const WeeklyTab = () => {
  const weather = useSelector((state) => state.weatherData);
  const lat = weather?.lat;
  const lon = weather?.lon;

  return (
    <ForecastContainer>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTableCell>широта</StyledTableCell>
            <StyledTableHeaders>{lat}</StyledTableHeaders>
          </tr>
          <tr>
            <StyledTableCell>долгота</StyledTableCell>
            <StyledTableHeaders>{lon}</StyledTableHeaders>
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
