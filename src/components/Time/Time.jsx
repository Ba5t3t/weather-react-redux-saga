import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { TimeContainer, TimeText } from "./StyledTime";

export const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const myInterval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
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
