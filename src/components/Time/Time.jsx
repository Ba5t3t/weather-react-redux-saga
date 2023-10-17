import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import { TimeContainer, TimeText } from "./StyledTime";

export const Time = () => {
  const timezone = useSelector((state) => state.weatherData.timezone);
  const [time, setTime] = useState("");

  const hoursTimezone = Math.floor(timezone / 3600);
  const minutesTimezone = Math.floor((timezone - hoursTimezone * 3600) / 60);
  const secondsTimezone =
    timezone - hoursTimezone * 3600 - minutesTimezone * 60;

  useEffect(() => {
    const myInterval = setInterval(() => {
      let hours = parseInt(moment().utc().format("HH")) + hoursTimezone;
      let minutes = parseInt(moment().utc().format("mm")) + minutesTimezone;
      let seconds = parseInt(moment().utc().format("ss")) + secondsTimezone;

      if (hours >= 24) {
        hours = hours - 24;
      }
      if (minutes >= 60) {
        minutes = minutes - 60;
      }
      if (seconds >= 60) {
        seconds = seconds - 60;
      }

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      setTime(hours + ":" + minutes);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [hoursTimezone, minutesTimezone, secondsTimezone]);

  return (
    <TimeContainer>
      <TimeText>{time}</TimeText>
    </TimeContainer>
  );
};
