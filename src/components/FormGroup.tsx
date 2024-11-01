import { observer } from "mobx-react-lite";
import Slider, { SliderData } from "./Slidder";
import TextField, { TextFieldData } from "./TextField";
import { FormGroup as MuiFormGroup } from "@mui/material";
import { ComponentType, GroupComponentModel } from "./models/component-model";

export type ComponentsData = TextFieldData | SliderData;

export interface FormGroupData extends GroupComponentModel {
  cmpType: ComponentType.FormGroup;
}

export interface FormGroupProps {
  formGroupData: FormGroupData;
}

const FormGroup = observer(({ formGroupData }: FormGroupProps) => {
  console.log("rendering::FormGroup");

  const hasError = formGroupData.children.some((c) => c.hasError);

  return (
    <MuiFormGroup
      sx={{
        display: "grid",
        gap: "1rem",
        padding: "1rem",
        borderColor: hasError ? "red" : "black",
        borderStyle: "solid",
        borderWidth: "1px",
      }}
    >
      {formGroupData.children.map((c) => {
        switch (c.cmpType) {
          case ComponentType.TextField:
            return <TextField key={c.id} textFieldData={c} />;

          case ComponentType.Slider:
            return <Slider key={c.id} sliderData={c} />;
        }
      })}
    </MuiFormGroup>
  );
});

export default FormGroup;
