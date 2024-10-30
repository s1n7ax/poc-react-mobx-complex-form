import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ComponentType } from "@/lib/store/formStore";
import { runInAction } from "mobx";

export interface TextFieldValidationData {
  min: {
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
  errors: string | null;
  validations: TextFieldValidationData;
}

export interface TextFieldProps {
  textFieldData: TextFieldData;
}

const TextField = observer(({ textFieldData }: TextFieldProps) => {
  console.log("rendering::TextField");

  const validateData = (value: string) => {
    if (textFieldData.validations.max) {
      if (value.length > textFieldData.validations.max.value) {
        runInAction(() => {
          textFieldData.errors = textFieldData.validations.max.message;
        });
      } else if (value.length < textFieldData.validations.min.value) {
        runInAction(() => {
          textFieldData.errors = textFieldData.validations.min.message;
        });
      } else {
        runInAction(() => {
          textFieldData.errors = "";
        });
      }
    }
  };

  return (
    <MuiTextField
      error={textFieldData.errors.length > 0}
      label={textFieldData.label}
      helperText={textFieldData.errors?.[0]}
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
