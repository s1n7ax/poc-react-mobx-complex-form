import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { getStrValidator } from "./hooks/useValidator";
import { watchedFormData } from "./FormBuilder";

export interface TextFieldProps {
  data: AtomicComponentState;
}

const TextField = observer(({ data }: TextFieldProps) => {
  console.log("rendering::TextField");
  const validate = getStrValidator(data);

  let isDisabled = false;

  if (data?.conditionalProps?.disabled) {
    const { fieldId, value: expectedValue } =
      data?.conditionalProps?.disabled.when;

    const watchedData = watchedFormData.fields.find((f) => f.id === fieldId);

    console.log("wached data::", watchedData?.value);

    if (watchedData) {
      console.log("*************");
      isDisabled = watchedData.value === expectedValue;
    }
  }

  return (
    <MuiTextField
      error={data.hasError}
      disabled={isDisabled}
      helperText={data.errorMessage}
      required={data.validations.required.value}
      label={data.label}
      placeholder={data.label}
      onChange={(ev) => {
        validate(ev.target.value);
      }}
    />
  );
});

export default TextField;
