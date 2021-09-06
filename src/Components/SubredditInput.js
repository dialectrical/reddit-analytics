import React from "react";
import {
  StyledInputGroup,
  StyledInputGroupText,
  StyledInput
} from "./Styles/StyledInput";

export const SubredditInput = (func, getData) => {
  const handleChange = event => {
    return func(event.currentTarget.value);
  };

  return (
    <div>
      <StyledInputGroup>
        <StyledInputGroupText>r/</StyledInputGroupText>
        <StyledInput placeholder="fountainpens" onChange={handleChange} />
      </StyledInputGroup>
    </div>
  );
};
