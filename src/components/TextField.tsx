import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ComponentType } from "@/lib/store/formStore";
import { runInAction } from "mobx";

export interface TextFieldValidationData {
  min?: {
    value: number;
    message: string;
  };
  max: {
    value: number;
    message: string;
  };
}

export interface TextFieldData {
  id: number;
  type: ComponentType.TextField;
  label: string;
  placeholder: string;
  value: string;
  error: string | null;
  validations: TextFieldValidationData;
}

export interface TextFieldProps {
  textFieldData: TextFieldData;
}

const TextField = observer(({ textFieldData }: TextFieldProps) => {
  console.log("rendering::TextField");
  const v = textFieldData.validations;

  const validateData = (value: string) => {
    let message: string | null;

    if (value.length > v.max.value) message = v.max.message;
    else if (v.min && value.length < v.min.value) message = v.min.message;
    else message = null;

    runInAction(() => {
      textFieldData.error = message;
    });
  };

  return (
    <MuiTextField
      error={!!textFieldData.error}
      required={!!textFieldData.validations.min}
      label={textFieldData.label}
      helperText={textFieldData.error}
      placeholder={textFieldData.placeholder}
      onChange={(ev) => {
        const value = ev.target.value;
        validateData(value);
        textFieldData.value = value;
      }}
    />
  );
});

export default TextField;
