import React from "react";
import { StyledButton } from "./Styles/StyledButton";

export const SubmitButton = func => {
  return (
    <StyledButton color="primary" onClick={func}>
      Search
    </StyledButton>
  );
};
