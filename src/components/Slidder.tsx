import { ComponentType } from "@/lib/store/formStore";
import { FormGroup, FormLabel, Slider as MuiSlider } from "@mui/material";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useRef } from "react";

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
  sliderData: SliderData;
}

const Slider = observer(({ sliderData }: SliderProps) => {
  console.log("rendering::Slider");

  const { value: minValue } = sliderData.validations.min ?? { value: 0 };
  const { value: maxValue } = sliderData.validations.max;
  const isRequired = minValue !== 0;

  const initialValue = useRef<number>(sliderData.value);

  const marks = Array.from(
    Array.from({ length: maxValue + 1 })
      .keys()
      .map((m) => ({ value: m, label: m.toString() })),
  );

  const validate = (value: number) => {
    if (value < minValue)
      sliderData.error =
        sliderData.validations.min?.message ??
        "shouldn't be smaller than " + minValue;
    else if (value > maxValue)
      sliderData.error = sliderData.validations.max.message;
    else sliderData.error = null;
  };

  return (
    <FormGroup>
      <FormLabel required={isRequired}>{sliderData.label}</FormLabel>
      <MuiSlider
        aria-label={sliderData.label}
        defaultValue={initialValue.current}
        color={sliderData.error ? "error" : "primary"}
        onChange={(_, value) => {
          runInAction(() => {
            sliderData.value = value as number;
            validate(value as number);
          });
        }}
        marks={marks}
        getAriaValueText={() => sliderData.value.toString()}
        valueLabelDisplay="auto"
        max={maxValue}
      />
    </FormGroup>
  );
});

export default Slider;
