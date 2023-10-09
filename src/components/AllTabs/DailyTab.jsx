import React from "react";
import { useSelector } from "react-redux";
import {
  ForecastContainer,
  StyledTable,
  StyledTableHeaders,
  StyledTableCell,
} from "../TodayForecast/StylesTodayForecast";

export const DailyTab = () => {
  const weather = useSelector((state) => state.weatherData);
  const humidity = weather?.humidity;
  const pressure = weather?.pressure;
  const wind = weather?.wind;

  return (
    <ForecastContainer>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTableCell>влажность</StyledTableCell>
            <StyledTableHeaders>{humidity}%</StyledTableHeaders>
          </tr>
          <tr>
            <StyledTableCell>давление</StyledTableCell>
            <StyledTableHeaders>{pressure * 0.75} мм рт.ст.</StyledTableHeaders>
          </tr>
          <tr>
            <StyledTableCell>скорость ветра</StyledTableCell>
            <StyledTableHeaders>{Math.round(wind)} м/с</StyledTableHeaders>
          </tr>
        </tbody>
      </StyledTable>
    </ForecastContainer>
  );
};
