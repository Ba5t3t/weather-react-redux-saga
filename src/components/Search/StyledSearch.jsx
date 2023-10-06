import styled from "styled-components";

export const LocationInput = styled.input`
  height: 30px;
  width: 180px;
  margin: 16px 0;
  border: none;
  padding: 5px;
  font-size: 17px;
  outline: none;
  opacity: 0.5;
  color: Black;

  &:onfocus {
    border: none;
  }
`;

export const LocationText = styled.p`
  height: 20px;
  width: 170px;
  margin: 16px 0;
  border: none;
  padding: 5px;
`;

export const StyledLocationIcon = styled.img`
  cursor: pointer;
`;

export const Select = styled.div`
  position: absolute;
  top: 266px;
  left: 106px;
`;

export const List = styled.ul`
  max-height: 152px;
  width: 170px;
  margin: 0;
  border: none;
  padding: 5px;
  font-size: 17px;
  outline: none;

  background-color: white;
  color: black;
  list-style-type: none;

  user-select: none;
  overflow: auto;
`;
