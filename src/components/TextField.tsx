import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { getStrValidator } from "./hooks/useValidator";
import { AtomicComponentModel, ComponentType } from "./models/component-model";
import { getErrorStateBasedOnIsDirty } from "./lib/utils/error";

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
  const { hasError, errorMessage } = getErrorStateBasedOnIsDirty(data);

  return (
    <MuiTextField
      error={hasError}
      helperText={errorMessage}
      required={!!data.validations.min}
      label={data.label}
      placeholder={data.placeholder}
      onChange={(ev) => {
        validate(ev.target.value);
      }}
    />
  );
});

export default TextField;
