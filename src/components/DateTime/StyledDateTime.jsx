import styled from "styled-components";

export const DateTimeContainer = styled.div`
  min-height: 50px;
  min-width: 200px;

  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: right;
  font-size: 15px;

  border: none;
  color: white;
  box-shadow: 0px 0px 4px 0px lightgrey;

  position: absolute;
  top: 40px;
  left: 790px;

  opacity: 0;
  transition: 0.5s;
  animation: show 2s 1;
  animation-fill-mode: forwards;
  animation-delay: 1s;
`;
