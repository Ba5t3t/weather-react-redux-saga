import styled from "styled-components";

export const StyledLocationIcon = styled.img`
  cursor: pointer;
`;

export const Select = styled.div`
  position: absolute;
  top: 256px;
  left: 106px;
`;

export const List = styled.ul`
  max-height: 170px;
  width: 170px;
  margin: 0;
  border: none;
  padding: 0 5px;
  font-size: 17px;
  outline: none;

  background-color: white;
  color: black;
  list-style-type: none;

  user-select: none;
  overflow: auto;
`;

export const LocationText = styled.p`
  height: 20px;
  width: 170px;
  margin: 16px 0;
  border: none;
  padding: 5px;
`;
