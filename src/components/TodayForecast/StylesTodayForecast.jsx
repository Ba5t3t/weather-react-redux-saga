import styled from "styled-components";

export const StyledForecastContainer = styled.div`
  margin-left: 90px;
  padding: 20px 25px;
  min-height: 250px;
  min-width: 250px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  color: white;

  position: absolute;
  top: 50px;
  left: 500px;

  opacity: 0.7;
`;

export const StyledForecastCard = styled.div`
  min-width: 250px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px grey;
  text-align: center;
`;

export const StyledForecastHeader = styled.div`
  text-align: center;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom: 2px solid dimgrey;
`;

export const StyledForecastTitle = styled.h1`
  margin: 0;
  padding: 20px;
  color: rgb(250, 206, 235);
  font-size: 30px;
`;

export const StyledTableContainer = styled.div`
  min-height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTable = styled.table`
  table {
    border: none;
    margin: auto;
  }
`;

export const StyledTableBody = styled.tbody`
  border: none;
`;

export const StyledTableHeaders = styled.th`
  padding: 15px 0 10px 20px;
  text-align: left;
`;

export const StyledTableCell = styled.td`
  padding: 10px 30px 10px 0;
  text-align: left;
`;

export const StyledTableCellIcon = styled.td`
  text-align: center;
  font-size: 16px;
`;

export const StyledForecastFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  border-top: 2px solid dimgrey;
  padding: 20px 30px 10px 0;
`;
