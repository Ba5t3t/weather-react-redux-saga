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

import sunriseIcon from "../../icons/sunrise.svg";
import sunsetIcon from "../../icons/sunset.svg";
import { TodaysTemp } from "../TodaysTemp/TodaysTemp";

export const TodayForecast = () => {
  const weather = useSelector((state) => state.weatherData);
  const humidity = weather?.humidity;
  const pressure = weather?.pressure;
  const wind = weather?.wind;

  const sunrise = new Date(weather?.sunrise * 1000);
  const sunset = new Date(weather?.sunset * 1000);

  // String(now.getHours()).padStart(2, "0");

  const sunriseTime =
    String(sunrise.getHours()).padStart(2, "0") +
    ":" +
    String(sunrise.getMinutes()).padStart(2, "0");

  const sunsetTime =
    String(sunset.getHours()).padStart(2, "0") +
    ":" +
    String(sunset.getMinutes()).padStart(2, "0");

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
{
  /* <StyledForecastFooter>
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
        </StyledForecastFooter> */
}
