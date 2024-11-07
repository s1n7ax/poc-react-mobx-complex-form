import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { getStrValidator } from "./hooks/useValidator";
import { watchedFormData } from "./FormBuilder";

export interface TextFieldProps {
  data: AtomicComponentState;
}

const TextField = observer(({ data }: TextFieldProps) => {
  console.log("rendering::TextField::", data.id);
  const validate = getStrValidator(data);

  let isDisabled = false;

  if (data?.conditionalProps?.disabled) {
    const { fieldId, value: expectedValue } =
      data?.conditionalProps?.disabled.when;

    const watchedData = watchedFormData.fields[fieldId];

    if (watchedData) {
      isDisabled = watchedData.value === expectedValue;
    }
  }

  return (
    <MuiTextField
      error={data.isDirty && data.hasError}
      disabled={isDisabled}
      helperText={data.isDirty && data.errorMessage}
      required={data.validations.required.value}
      label={data.label + "id::" + data.id}
      placeholder={data.label}
      onChange={(ev) => {
        validate(ev.target.value);
      }}
    />
  );
});

export default TextField;
