import React from "react";
import { useSelector } from "react-redux";
import {
  StyledForecastContainer,
  StyledForecastCard,
  StyledForecastHeader,
  StyledForecastTitle,
  StyledTableContainer,
  StyledTable,
  StyledTableBody,
  StyledTableHeaders,
  StyledTableCell,
  StyledTableCellIcon,
  StyledForecastFooter,
} from "./StylesTodayForecast";

import sunriseIcon from "../../icons/sunrise.svg";
import sunsetIcon from "../../icons/sunset.svg";

export const TodayForecast = () => {
  const weather = useSelector((state) => state.weatherData);
  const humidity = weather?.humidity;
  const visibility = weather?.visibility;
  const pressure = weather?.pressure;
  const wind = weather?.wind;

  const sunrise = new Date(weather?.sunrise * 1000);
  const sunset = new Date(weather?.sunset * 1000);
  const timezone = weather?.timezone;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const sunriseTime = sunrise.getHours() + ":" + sunrise.getMinutes();
  const sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();

  return (
    <StyledForecastContainer>
      <StyledForecastCard>
        <StyledForecastHeader>
          <StyledForecastTitle>Прогноз на сегодня</StyledForecastTitle>
        </StyledForecastHeader>

        <StyledTableContainer>
          <StyledTable>
            <tbody>
              <tr>
                <StyledTableCell>влажность</StyledTableCell>
                <StyledTableHeaders>{humidity}%</StyledTableHeaders>
              </tr>
              <tr>
                <StyledTableCell>видимость</StyledTableCell>
                <StyledTableHeaders>{visibility / 100} м</StyledTableHeaders>
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

        <StyledForecastFooter>
          <StyledTable>
            <StyledTableBody>
              <tr>
                <StyledTableCellIcon>
                  {<img src={sunriseIcon} width='70' height='30' />}
                </StyledTableCellIcon>
                <StyledTableCellIcon>
                  {<img src={sunsetIcon} width='35' height='30' />}
                </StyledTableCellIcon>
              </tr>
              <tr>
                <StyledTableCellIcon>{sunriseTime}</StyledTableCellIcon>
                <StyledTableCellIcon>{sunsetTime}</StyledTableCellIcon>
              </tr>
            </StyledTableBody>
          </StyledTable>
        </StyledForecastFooter>
      </StyledForecastCard>
    </StyledForecastContainer>
  );
};

// humidity, visibility, pressure, wind speed, sunrise, sunset
