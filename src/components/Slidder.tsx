import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { FormGroup, FormLabel, Slider as MuiSlider } from "@mui/material";
import assert from "assert";
import { observer } from "mobx-react-lite";
import { useRef } from "react";

export interface SliderProps {
  data: AtomicComponentState;
}

const Slider = observer(({ data }: SliderProps) => {
  console.log("rendering::Slider", data.id, data.value);
  const initValue = useRef(data.formValue);
  assert(
    typeof data.value === "number",
    "The value must be a number but passed::",
  );
  assert(
    data.validations.min,
    "You must have minimum number validation for slider",
  );

  assert(
    data.validations.max,
    "You must have maximum number validation for slider",
  );

  const max = data.validations.max.value;

  return (
    <FormGroup
      sx={{
        display: data.isHidden ? "none" : "block",
        borderColor: "blue",
        borderWidth: "2px",
        padding: "2rem",
      }}
    >
      <FormLabel required={data.validations.required.value}>
        {data.label + "::" + data.id}
      </FormLabel>
      <MuiSlider
        aria-label={data.label}
        defaultValue={initValue.current as number}
        color={data.isDirty && data.error.hasError ? "error" : "primary"}
        onChange={(_, value) => data.changeValue(value as number)}
        marks={getMarks(max)}
        getAriaValueText={() => data.value?.toString() ?? ""}
        valueLabelDisplay="auto"
        max={max}
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
