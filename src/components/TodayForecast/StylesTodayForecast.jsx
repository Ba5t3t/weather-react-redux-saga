import styled from "styled-components";

export const StyledForecastContainer = styled.div`
  padding: 20px 11px;
  min-height: 100px;
  min-width: 950px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  color: white;
  box-shadow: 0px 0px 4px 0px lightgrey;

  position: absolute;
  top: 450px;
  left: 20px;
`;

export const StyledForecastCard = styled.div`
  min-width: 250px;
  text-align: center;
  position: relative;
  color: #fff
  

  &:before {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: -1;
    background: url() center / cover no-repeat;
    filter: blur(5px);
  }
`;

export const StyledForecastHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  text-align: left;
  border-bottom: 2px solid dimgrey;
`;

export const StyledForecastButton = styled.button`
  margin: 0;
  color: white;
  float: left;
  border: none;
  background-color: transparent;
  width: 210px;
  font-size: 17px;
  text-align: center;
  padding: 15px 0;

  &:hover {
    box-shadow: 0px 0px 4px 0px lightgrey;
  }

  &:active {
    background-color: ${(props) => (props.$activeTab ? "#7970ca" : "")};
  }
`;

export const ForecastContainer = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
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
  padding: 10px 30px 10px 50px;
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

  border-bottom: 2px solid dimgrey;
  padding: 20px 30px 10px 0;
`;
