import styled from "styled-components";

export const LocationInput = styled.input`
  height: 20px;
  width: 170px;
  margin: 16px 0;
  border: none;
  padding: 5px;
  font-size: 17px;
  outline: none;
  opacity: 0.5;

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
