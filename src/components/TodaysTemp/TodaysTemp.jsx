import React from "react";
import { useSelector } from "react-redux";

import {
  TodaysTempContainer,
  Header,
  Title,
  TemperatureCardsContainer,
  TemperatureCard,
  SunCard,
  Temperature,
} from "./StyledTodaysTemp";

import sunriseIcon from "../../icons/sunrise.svg";
import sunsetIcon from "../../icons/sunset.svg";
import Thermometer from "../../icons/temperature.svg";

export const TodaysTemp = () => {
  const weather = useSelector((state) => state.weatherData);
  const tempMin = weather?.tempMin;
  const tempMax = weather?.tempMax;

  const sunrise = new Date(weather?.sunrise * 1000);
  const sunset = new Date(weather?.sunset * 1000);

  const sunriseTime =
    String(sunrise.getHours()).padStart(2, "0") +
    ":" +
    String(sunrise.getMinutes()).padStart(2, "0");

  const sunsetTime =
    String(sunset.getHours()).padStart(2, "0") +
    ":" +
    String(sunset.getMinutes()).padStart(2, "0");

  return (
    <TodaysTempContainer>
      <Header>
        <Title>Сегодня</Title>
      </Header>
      <TemperatureCardsContainer>
        <SunCard>
          {<img src={sunriseIcon} width='70' height='20' />}
          <div>{sunriseTime}</div>
          {<img src={sunsetIcon} width='35' height='20' />}
          <div>{sunsetTime}</div>
        </SunCard>
        <TemperatureCard>
          {<img src={Thermometer} height='50' />}
          <Temperature>
            <div>
              {Math.round(tempMax)}
              {"°C"}
            </div>
            <div>
              {Math.round(tempMin)}
              {"°C"}
            </div>
          </Temperature>
        </TemperatureCard>
      </TemperatureCardsContainer>
    </TodaysTempContainer>
  );
};
