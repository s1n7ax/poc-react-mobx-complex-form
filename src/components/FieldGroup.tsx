import { observer } from "mobx-react-lite";
import Slider, { SliderData } from "./Slidder";
import TextField, { TextFieldData } from "./TextField";
import { FormGroup as MuiFormGroup } from "@mui/material";
import { ComponentType, GroupComponentModel } from "./models/component-model";
import GenericComponentList from "./GenericComponentList";

export type ComponentsData = TextFieldData | SliderData;

export interface FieldGroupData extends GroupComponentModel {
  cmpType: ComponentType.FieldGroup;
}

export interface FormGroupProps {
  data: FieldGroupData;
}

const FieldGroup = observer(({ data: formGroupData }: FormGroupProps) => {
  console.log("rendering::FormGroup");

  const hasError = formGroupData.children.some((c) => c.hasError);

  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        borderColor: hasError ? "red" : "green",
        borderWidth: "1px",
        padding: "10px",
      }}
    >
      <GenericComponentList componentList={formGroupData.children} />
    </div>
  );
});

export default FieldGroup;
