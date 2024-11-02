import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { getStrValidator } from "./hooks/useValidator";
import { AtomicComponentModel, ComponentType } from "./models/component-model";

export interface TextFieldData
  extends AtomicComponentModel<string | null | undefined> {
  cmpType: ComponentType.TextField;
  placeholder: string;
}

export interface TextFieldProps {
  data: TextFieldData;
}

const TextField = observer(({ data }: TextFieldProps) => {
  console.log("rendering::TextField");
  const validate = getStrValidator(data);

  return (
    <MuiTextField
      error={!!data.hasError}
      required={!!data.validations.min}
      label={data.label}
      helperText={data.errorMessage}
      placeholder={data.placeholder}
      onChange={(ev) => {
        validate(ev.target.value);
      }}
    />
  );
});

export default TextField;
