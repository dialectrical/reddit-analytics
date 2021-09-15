import styled from "styled-components";
import { InputGroup, InputGroupText, Input } from "reactstrap";

export const StyledInputGroup = styled(InputGroup)`
  font-family: Verdana;
  width: 20vw;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: #efefed;
  @media (max-width: 1024px) {
    width: 50vw;
  }
`;

export const StyledInputGroupText = styled(InputGroupText)`
  font-weight: bold;
  text-align: center;
  background-color: #ff4500;
`;

export const StyledInput = styled(Input)`
  text-align: left;
  background-color: #eff7ff;
`;
