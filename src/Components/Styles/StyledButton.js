import styled from "styled-components";
import { Button } from "reactstrap";

export const StyledButton = styled(Button)`
  marign-top: 10px;
  margin-bottom: 10px;
  width: 10vw;
  background-color: #cee3f8;
  border: 1px;
  color: #336699;
  font-family: Verdana;
  padding: 2px 6px 3px;
  :hover {
    background-color: #0077d6;
  }
  @media (max-width: 1024px) {
    width: 25vw;
  }
`;
