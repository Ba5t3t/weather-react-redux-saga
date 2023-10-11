import styled from "styled-components";

export const StyledLocationInput = styled.input`
  height: 20px;
  width: 170px;
  margin: 0;
  border: none;
  padding: 5px;
  font-size: 17px;
  outline: none;
  opacity: 0.5;
  color: black;

  &:onfocus {
    border: none;
  }
`;

export const StyledDiv = styled.div`
  border: ${(props) => (props.$error ? "1px solid red" : "")};
`;
