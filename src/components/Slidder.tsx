import { FormGroup, FormLabel, Slider as MuiSlider } from "@mui/material";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { AtomicComponentModel, ComponentType } from "./models/component-model";
import { useValidator } from "./validations/number_validator";

export interface SliderData extends AtomicComponentModel<number> {
  cmpType: ComponentType.Slider;
  stepSize: number;
  validations: {
    min: {
      value: number;
      message: string;
    };
    max: {
      value: number;
      message: string;
    };
  };
}

export interface SliderProps {
  sliderData: SliderData;
}

const Slider = observer(({ sliderData }: SliderProps) => {
  console.log("rendering::Slider");

  const initialValue = useRef<number>(sliderData.value);
  const { value: minVal } = sliderData.validations.min;
  const { value: maxVal } = sliderData.validations.max;
  const isRequired = minVal > 0;
  const validate = useValidator(sliderData.validations);

  const marks = Array.from(
    Array.from({ length: maxVal + 1 })
      .keys()
      .map((m) => ({ value: m, label: m.toString() })),
  );

  return (
    <FormGroup>
      <FormLabel required={isRequired}>{sliderData.label}</FormLabel>
      <MuiSlider
        aria-label={sliderData.label}
        defaultValue={initialValue.current}
        color={sliderData.hasError ? "error" : "primary"}
        onChange={(_, value) => {
          const result = validate(value);

          if (result.error) {
            runInAction(() => {
              sliderData.hasError = true;
              sliderData.errorMessage = result.error.errors[0].message;
            });
          } else {
            runInAction(() => {
              sliderData.hasError = false;
              sliderData.errorMessage = null;
              sliderData.value = result.data;
            });
          }
        }}
        marks={marks}
        getAriaValueText={() => sliderData.value.toString()}
        valueLabelDisplay="auto"
        max={maxVal}
      />
    </FormGroup>
  );
});

export default Slider;
