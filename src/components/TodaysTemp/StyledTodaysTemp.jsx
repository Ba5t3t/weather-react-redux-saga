import styled from "styled-components";

export const TodaysTempContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  text-align: left;
`;

export const Title = styled.p`
  margin: 0;
  color: white;

  border: none;
  background-color: transparent;
  width: 210px;
  font-size: 17px;
  padding: 15px 20px 27px 20px;
`;

export const TemperatureCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const TemperatureCard = styled.div`
  height: 70px;
  width: 85px;
  box-shadow: 0px 0px 4px 0px lightgrey;
  text-align: center;
  padding: 30px 10px;
`;
