import React from "react";

export const Weekday = () => {
  const weekday = new Date().toLocaleDateString("ru-RU", { weekday: "long" });
  const month = new Date()
    .toLocaleDateString("ru-RU", { month: "short" })
    .slice(0, -1);
  const date = new Date();

  const year = date.getFullYear();
  //const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const currentDate = `${day} ${month} ${year}`;

  console.log(month);

  return (
    <div>
      <h3>
        {weekday}
        {", "}
        {currentDate}
      </h3>
    </div>
  );
};
