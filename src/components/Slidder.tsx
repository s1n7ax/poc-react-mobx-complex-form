import { FormGroup, FormLabel, Slider as MuiSlider } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { getNumValidator } from "./hooks/useValidator";
import { AtomicComponentModel, ComponentType } from "./models/component-model";
import { getErrorStateBasedOnIsDirty } from "./lib/utils/error";

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
  data: SliderData;
}

const Slider = observer(({ data }: SliderProps) => {
  console.log("rendering::Slider");

  const initialValue = useRef<number>(data.value);

  const { value: minVal } = data.validations.min;
  const { value: maxVal } = data.validations.max;
  const isRequired = minVal > 0;
  const validate = getNumValidator(data);
  const { hasError } = getErrorStateBasedOnIsDirty(data);

  return (
    <FormGroup>
      <FormLabel required={isRequired}>{data.label}</FormLabel>
      <MuiSlider
        aria-label={data.label}
        defaultValue={initialValue.current}
        color={hasError ? "error" : "primary"}
        onChange={(_, value) => {
          validate(value);
        }}
        marks={getMarks(maxVal)}
        getAriaValueText={() => data.value.toString()}
        valueLabelDisplay="auto"
        max={maxVal}
      />
    </FormGroup>
  );
});

const getMarks = (maxVal: number) =>
  Array.from(
    Array.from({ length: maxVal + 1 })
      .keys()
      .map((m) => ({ value: m, label: m.toString() })),
  );

export default Slider;
