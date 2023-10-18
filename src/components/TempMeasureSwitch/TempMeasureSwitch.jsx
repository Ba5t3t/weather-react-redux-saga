import React, { useState } from "react";
import "../../index.css";
import { TempMeasureButton } from "./TempMeasureButton";

export const TempMeasureSwitch = () => {
  const [activeTempMeasureButton, setActiveTempMeasureButton] =
    useState("celsius");

  const tempMeasureButtons = [
    {
      title: "C",
      id: "celsius",
    },
    {
      title: "F",
      id: "farenheit",
    },
  ];

  return (
    <>
      <div>
        {tempMeasureButtons.map((item) => {
          return (
            <TempMeasureButton
              key={item.id}
              title={item.title}
              id={item.id}
              activeTempMeasureButton={item.id === activeTempMeasureButton}
              setActiveTempMeasureButton={setActiveTempMeasureButton}
            />
          );
        })}
      </div>
    </>
  );
};
