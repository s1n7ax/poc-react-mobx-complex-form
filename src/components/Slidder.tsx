import { ComponentType } from "@/lib/store/formStore";
import { FormGroup, FormLabel, Slider as MuiSlider } from "@mui/material";
import { Mark } from "@mui/material/Slider/useSlider.types";
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
  stepSize: number;
  validations: SliderValidationData;
}

export interface SliderProps {
  slider: SliderData;
}

const Slider = observer(({ slider }: SliderProps) => {
  console.log("rendering::Slider");
  const { value: minValue } = slider.validations.min ?? { value: 0 };
  const { value: maxValue } = slider.validations.max;
  const isRequired = minValue !== 0;

  const initialValue = useRef<number>(slider.value);

  const marks = Array.from(
    Array.from({ length: maxValue + 1 })
      .keys()
      .map((m) => ({ value: m, label: m.toString() })),
  );

  const validate = (value: number) => {
    if (value < minValue)
      slider.error =
        slider.validations.min?.message ??
        "shouldn't be smaller than " + minValue;
    else if (value > maxValue) slider.error = slider.validations.max.message;
    else slider.error = null;
  };

  return (
    <FormGroup>
      <FormLabel required={isRequired}>{slider.label}</FormLabel>
      <MuiSlider
        aria-label={slider.label}
        defaultValue={initialValue.current}
        color={slider.error ? "error" : "primary"}
        onChange={(_, value) => {
          runInAction(() => {
            slider.value = value as number;
            validate(value as number);
          });
        }}
        marks={marks}
        getAriaValueText={() => slider.value.toString()}
        valueLabelDisplay="auto"
        max={maxValue}
      />
    </FormGroup>
  );
});

export default Slider;
