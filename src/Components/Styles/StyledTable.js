import styled from "styled-components";
import { Table } from "reactstrap";

export const StyledTable = styled(Table)`
  background: #fafafa;
  border: 1px solid #369;
  border-radius: 7px;
  color: #222222;
  margin: auto;
  font-family: Verdana;
  width: 90vw;
  font-size: 0.75vw;
  text-align: center;
`;

export const StyledHourlyTable = styled(Table)`
  background: #fafafa;
  border: 1px solid #369;
  border-radius: 7px;
  color: #222222;
  width: 40vw;
  margin-top: 20px;
  margin-left: 30vw;
  font-family: Verdana;
`;

export const Styledtd = styled.td`
  border: none;
  cursor: pointer;
  margin: auto;
  text-align: center;
`;
