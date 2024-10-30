import { Slider as MuiSlider } from "@mui/material";
import React from "react";

export default function NumberSlider() {
  return (
    <MuiSlider
      aria-label="Temperature"
      defaultValue={30}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      shiftStep={30}
      step={10}
      marks
      min={10}
      max={110}
    />
  );
}
