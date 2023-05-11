import { Button, Switch } from "@mui/material";
import React from "react";
// import { dark, light } from "@material-ui/core/styles/createPalette";

export const ThemeSwitch = ({ darkState, handleThemeChange }) => {
  return (
    <div>
      <Switch checked={darkState} onChange={handleThemeChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Btn clicked!");
        }}
      >
        Theme Test
      </Button>
    </div>
  );
};
