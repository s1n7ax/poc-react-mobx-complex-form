import { TextField as MuiTextField } from "@mui/material";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { AtomicComponentModel, ComponentType } from "./models/component-model";
import { useValidator } from "./validations/string_validator";

export interface TextFieldData
  extends AtomicComponentModel<string | null | undefined> {
  cmpType: ComponentType.TextField;
  placeholder: string;
}

export interface TextFieldProps {
  textFieldData: TextFieldData;
}

const TextField = observer(({ textFieldData }: TextFieldProps) => {
  console.log("rendering::TextField");
  const v = textFieldData.validations;
  const validate = useValidator(v);

  return (
    <MuiTextField
      error={!!textFieldData.hasError}
      required={!!textFieldData.validations.min}
      label={textFieldData.label}
      helperText={textFieldData.errorMessage}
      placeholder={textFieldData.placeholder}
      onChange={(ev) => {
        const result = validate(ev.target.value);

        if (result.error) {
          runInAction(() => {
            textFieldData.hasError = true;
            textFieldData.errorMessage = result.error.errors[0].message;
          });
        } else {
          runInAction(() => {
            textFieldData.hasError = false;
            textFieldData.errorMessage = null;
            textFieldData.value = result.data;
          });
        }
      }}
    />
  );
});

export default TextField;
