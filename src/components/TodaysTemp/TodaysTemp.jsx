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
import moment from "moment";

export const TodaysTemp = () => {
  const weather = useSelector((state) => state.weatherData);
  const tempMin = weather?.tempMin;
  const tempMax = weather?.tempMax;
  /* const sunrise = weather?.sunrise;
  const sunset = weather?.sunset; */

  const timezone = weather.timezone;
  const hoursTimezone = Math.floor(timezone / 3600);
  const minutesTimezone = Math.floor((timezone - hoursTimezone * 3600) / 60);

  const localTimezone = new Date().getTimezoneOffset() * -3600; // локальная временная зона в секундах
  const localTimezoneHours = Math.floor(localTimezone / 3600); // локальная временная зона в часах
  const localTimezoneMinutes = Math.floor(
    (localTimezone - localTimezoneHours * 3600) / 60
  );

  let sunriseHours =
    new Date(weather?.sunrise * 1000).getHours() -
    localTimezoneHours / 60 +
    hoursTimezone;
  let sunriseMinutes =
    new Date(weather?.sunrise * 1000).getMinutes() +
    localTimezoneMinutes +
    minutesTimezone;

  let sunsetHours =
    new Date(weather?.sunset * 1000).getHours() -
    localTimezoneHours / 60 +
    hoursTimezone;
  let sunsetMinutes =
    new Date(weather?.sunset * 1000).getMinutes() +
    localTimezoneMinutes +
    minutesTimezone;

  /* console.log(
    new Date(weather?.sunset * 1000).getHours(),
    localTimezoneHours / 60,
    hoursTimezone
  ); */

  /* const sunrise = new Date(weather?.sunrise * 1000);
  const sunriseHours = String(sunrise.getHours()).padStart(2, "0");
  const sunriseMinutes = String(new Date(weather?.sunrise * 1000).getMinutes()).padStart(2, "0"); */

  if (sunriseHours < 10) {
    sunriseHours = "0" + sunriseHours;
  }
  if (sunriseMinutes < 10) {
    sunriseMinutes = "0" + sunriseMinutes;
  }

  if (sunsetHours < 10) {
    sunsetHours = "0" + sunsetHours;
  }
  if (sunsetMinutes < 10) {
    sunsetMinutes = "0" + sunsetMinutes;
  }

  /*  const sunset = new Date(1697489312 * 1000);
  const sunsetTime =
    String(new Date(1697489312 * 1000).getHours()).padStart(2, "0") +
    ":" +
    String(sunset.getMinutes()).padStart(2, "0"); */

  // let hours = parseInt(moment().utc().format("HH")) + hoursTimezone;

  //const sunriseHours = parseInt(moment(sunrise).format("HH"));
  //const sunriseMinutes = moment.unix(sunrise).format("mm");

  return (
    <TodaysTempContainer>
      <Header>
        <Title>Сегодня</Title>
      </Header>
      <TemperatureCardsContainer>
        <SunCard>
          {<img src={sunriseIcon} width='70' height='20' />}
          <div>
            {sunriseHours}:{sunriseMinutes}
          </div>
          {<img src={sunsetIcon} width='35' height='20' />}
          <div>
            {sunsetHours}:{sunsetMinutes}
          </div>
        </SunCard>
        <TemperatureCard>
          {<img src={Thermometer} height='50' />}
          <Temperature>
            <div>
              {Math.round(tempMax)}
              {"°"}
            </div>
            <div>
              {Math.round(tempMin)}
              {"°"}
            </div>
          </Temperature>
        </TemperatureCard>
      </TemperatureCardsContainer>
    </TodaysTempContainer>
  );
};
