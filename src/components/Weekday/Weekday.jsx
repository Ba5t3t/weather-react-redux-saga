import React from "react";
import { DateContainer, DateText } from "./StyledWeekday";
import moment from "moment";

export const Weekday = () => {
  //const weekday = new Date().toLocaleDateString("ru-RU", { weekday: "long" });
  /*  const month = new Date()
    .toLocaleDateString("ru-RU", { month: "short" })
    .slice(0, -1) */

  const weekday = moment().format("dddd");
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  const date = moment().format("D");
  //const date = new Date();

  //const year = date.getFullYear();
  //const month = String(date.getMonth()).padStart(2, "0");
  //const day = String(date.getDate()).padStart(2, "0");
  const currentDate = `${date} ${month} ${year}`;

  //console.log(date);

  return (
    <DateContainer>
      <DateText>
        {weekday}
        {", "}
        {currentDate}
      </DateText>
    </DateContainer>
  );
};
