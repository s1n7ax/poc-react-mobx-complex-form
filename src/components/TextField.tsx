import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";

export interface TextFieldProps {
  data: AtomicComponentState;
}

const TextField = observer(({ data }: TextFieldProps) => {
  console.log("rendering::TextField::", data.id);
  return (
    <MuiTextField
      value={data.formValue}
      sx={{
        display: data.isHidden ? "none" : "block",
      }}
      fullWidth={true}
      error={data.isDirty && data.error.hasError}
      disabled={data.isDisabled}
      helperText={data.isDirty && data.error.message}
      required={data.validations.required.value}
      label={data.label + "id::" + data.id}
      placeholder={data.label}
      onChange={(ev) => data.changeValue(ev.target.value)}
    />
  );
});

export default TextField;
