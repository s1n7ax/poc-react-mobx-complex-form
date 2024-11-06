import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { getStrValidator } from "./hooks/useValidator";

export interface TextFieldProps {
  data: AtomicComponentState;
}

const TextField = observer(({ data }: TextFieldProps) => {
  console.log("rendering::TextField");
  const validate = getStrValidator(data);

  return (
    <MuiTextField
      error={data.hasError}
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
