import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import moment from 'moment';

import { TimeContainer, TimeText } from "./StyledTime";

export const Time = () => {
  
  const timezone = useSelector((state) => state.weatherData.timezone);
  console.log(timezone);
  const [time, setTime] = useState("");

  useEffect(() => {
    const myInterval = setInterval(() => {
      const now = moment();
      //const hours = String(now.getHours()).padStart(2, "0");
      //const minutes = String(now.getMinutes()).padStart(2, "0");
      const hours = moment().hours();
      const minutes = moment().minutes();

      setTime(hours + ":" + minutes);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <TimeContainer>
      <TimeText>{time}</TimeText>
    </TimeContainer>
  );
};
