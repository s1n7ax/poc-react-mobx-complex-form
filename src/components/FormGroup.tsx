import { ComponentType } from "@/lib/store/formStore";
import { observer } from "mobx-react-lite";
import Slider, { SliderData } from "./Slidder";
import TextField, { TextFieldData } from "./TextField";
import { FormGroup as MuiFormGroup } from "@mui/material";

export type ComponentsData = TextFieldData | SliderData;

export interface FormGroupData {
  id: number;
  type: ComponentType.FormGroup;
  error: string | null;
  components: ComponentsData[];
}

export interface FormGroupProps {
  formGroupData: FormGroupData;
}

const FormGroup = observer(({ formGroupData }: FormGroupProps) => {
  const hasError = formGroupData.components.some((c) => c.error);
  console.log("rendering::FormGroup");

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
      {formGroupData.components.map((c) => {
        switch (c.type) {
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
