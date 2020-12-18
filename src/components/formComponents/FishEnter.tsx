import React from "react";
import { TextField } from "@material-ui/core";

export const FishEnter = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
  );
};
