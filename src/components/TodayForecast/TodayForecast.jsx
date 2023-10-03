import React from "react";
import { useSelector } from "react-redux";
import {
  StyledForecastContainer,
  StyledForecastCard,
  StyledForecastHeader,
  StyledForecastButton,
  StyledTableContainer,
  StyledTable,
  StyledTableBody,
  StyledTableHeaders,
  StyledTableCell,
  StyledTableCellIcon,
  StyledForecastFooter,
} from "./StylesTodayForecast";

import { TodaysTemp } from "../TodaysTemp/TodaysTemp";

export const TodayForecast = () => {
  const weather = useSelector((state) => state.weatherData);
  const humidity = weather?.humidity;
  const pressure = weather?.pressure;
  const wind = weather?.wind;

  // String(now.getHours()).padStart(2, "0");

  return (
    <StyledForecastContainer>
      <StyledForecastCard>
        <StyledForecastHeader>
          <StyledForecastButton>Прогноз на день</StyledForecastButton>
          <StyledForecastButton>Почасовый прогноз</StyledForecastButton>
          <StyledForecastButton>Ежедневный прогноз</StyledForecastButton>
        </StyledForecastHeader>

        <StyledTableContainer>
          <StyledTable>
            <tbody>
              <tr>
                <StyledTableCell>влажность</StyledTableCell>
                <StyledTableHeaders>{humidity}%</StyledTableHeaders>
              </tr>
              <tr>
                <StyledTableCell>давление</StyledTableCell>
                <StyledTableHeaders>
                  {pressure * 0.75} мм рт.ст.
                </StyledTableHeaders>
              </tr>
              <tr>
                <StyledTableCell>скорость ветра</StyledTableCell>
                <StyledTableHeaders>{Math.round(wind)} м/с</StyledTableHeaders>
              </tr>
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </StyledForecastCard>

      <TodaysTemp></TodaysTemp>
    </StyledForecastContainer>
  );
};

// humidity, visibility, pressure, wind speed, sunrise, sunset
