import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { getStrValidator } from "../lib/hooks/useValidator";

export interface TextFieldProps {
  data: AtomicComponentState;
}

const TextField = observer(({ data }: TextFieldProps) => {
  console.log("rendering::TextField::", data.id);
  const validate = getStrValidator(data);

  return (
    <MuiTextField
      sx={{
        display: data.isHidden ? "none" : "block",
      }}
      error={data.isDirty && data.hasError}
      disabled={data.isDisabled}
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
