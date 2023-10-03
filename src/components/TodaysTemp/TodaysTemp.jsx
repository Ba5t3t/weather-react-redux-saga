import React from "react";
import {
  TodaysTempContainer,
  Header,
  Title,
  TemperatureCardsContainer,
  TemperatureCard,
} from "./StyledTodaysTemp";

export const TodaysTemp = () => {
  return (
    <TodaysTempContainer>
      <Header>
        <Title>Сегодня</Title>
      </Header>
      <TemperatureCardsContainer>
        <TemperatureCard>sunrise sunset</TemperatureCard>
        <TemperatureCard>temp min max</TemperatureCard>
      </TemperatureCardsContainer>
    </TodaysTempContainer>
  );
};
