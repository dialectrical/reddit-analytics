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
  height: 24vw;
  text-align: center;

  @media (max-width: 1024px) {
    height: 95vh;
    width: 100vw;
  }
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

  @media (max-width: 1024px) {
    margin-left: 5vw;
    width: 90vw;
  }
`;

export const Styledtd = styled.td`
  border: none;
  cursor: pointer;
  margin: auto;
  text-align: center;
  :hover {
    background-color: #eff7ff;
  }
`;

export const Styledth = styled.th`
  height: 3vw;

  @media (max-width: 1024px) {
    height: 11vh;
  }
`;
