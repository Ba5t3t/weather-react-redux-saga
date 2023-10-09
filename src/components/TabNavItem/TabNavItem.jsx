import React from "react";
import { StyledForecastButton } from "../TodayForecast/StylesTodayForecast";

export const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <StyledForecastButton $activeTab={activeTab} onClick={handleClick}>
      {title}
    </StyledForecastButton>
  );
};
