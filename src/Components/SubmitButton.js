import React from "react";
import { Button } from "reactstrap";

export const SubmitButton = func => {
  return (
    <Button color="primary" onClick={func}>
      Submit
    </Button>
  );
};
