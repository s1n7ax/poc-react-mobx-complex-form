import { ComponentType } from "@/lib/store/formStore";
import { Slider as MuiSlider } from "@mui/material";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useRef } from "react";

export interface SliderValidationData {
  min?: {
    value: number;
    message: string;
  };
  max: {
    value: number;
    message: string;
  };
}

export interface SliderData {
  id: number;
  type: ComponentType.Slider;
  label: string;
  placeholder: string;
  value: number;
  error: string | null;
  validations: SliderValidationData;
}

export interface SliderProps {
  slider: SliderData;
}

const Slider = observer(({ slider }: SliderProps) => {
  console.log("rendering::Slider", slider.value);

  const initialValue = useRef<number>(slider.value);

  return (
    <MuiSlider
      aria-label={slider.label}
      defaultValue={initialValue.current}
      // value={slider.value}
      onChange={(_, value) => {
        runInAction(() => {
          slider.value = value as number;
        });
      }}
      getAriaValueText={() => slider.value.toString()}
      valueLabelDisplay="auto"
      // shiftStep={1}
      // step={10}
      min={slider.validations.min?.value}
      max={slider.validations.max.value}
    />
  );
});

export default Slider;
