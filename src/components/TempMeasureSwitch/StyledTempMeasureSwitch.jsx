import styled from "styled-components";

export const StyledTempMeasureButton = styled.button`
  margin: 0;
  color: ${(props) => (props.$activeTab ? "white" : "#bd9e9e")};
  border: none;
  background-color: transparent;
  width: 20px;
  font-size: 20px;
  text-align: center;
  padding: 0;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 0px 0px 4px 0px lightgrey;
    transition-duration: 0.5s;
  }
`;

/*  */
