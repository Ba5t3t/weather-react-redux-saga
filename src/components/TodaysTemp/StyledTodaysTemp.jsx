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

export const SunCard = styled.div`
  height: 100px;
  width: 85px;
  box-shadow: 0px 0px 4px 0px lightgrey;
  text-align: center;
  padding: 20px 10px 10px 10px;
  font-size: 14px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

export const TemperatureCard = styled.div`
  height: 100px;
  width: 85px;
  box-shadow: 0px 0px 4px 0px lightgrey;
  text-align: center;
  padding: 20px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* export const Thermometer = styled.div`

` */

export const Temperature = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;
