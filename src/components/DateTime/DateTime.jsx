import React from "react";

import { Time } from "../Time/Time";
import { Weekday } from "../Weekday/Weekday";
import { DateTimeContainer } from "./StyledDateTime";

export const DateTime = () => {
  return (
    <DateTimeContainer>
      <Time></Time>
      <Weekday></Weekday>
    </DateTimeContainer>
  );
};
