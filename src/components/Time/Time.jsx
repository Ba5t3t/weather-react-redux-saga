import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Time = () => {
  const [time, setTime] = useState("");

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(hours + ":" + minutes);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
};
