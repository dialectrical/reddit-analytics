import styled from "styled-components";
import { Table } from "reactstrap";

export const StyledTable = styled(Table)`
  margin-left: 10vw;
  font-family: Verdana;
  width: 80vw;
  height: auto;
  font-size: 0.75vw;
`;

export const StyledHourlyTable = styled(Table)`
  width: 40vw;
  margin-left: 30vw;
`;

export const Styledtd = styled.td`
  :hover {
    background-color: #eff7ff;
  }
`;
