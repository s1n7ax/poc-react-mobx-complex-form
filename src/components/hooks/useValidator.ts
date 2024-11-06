import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { runInAction } from "mobx";
import { validateNum } from "../validations/number_validator";
import { validateStr } from "../validations/string_validator";

export const getStrValidator = (field: AtomicComponentState) => {
  const validate = validateStr(field.validations);

  return (value: unknown) => {
    const result = validate(value);
    console.log("validating", result);

    if (result.error) {
      runInAction(() => {
        field.isDirty = true;
        field.hasError = true;
        field.errorMessage = result.error.errors[0].message;
      });
    } else {
      runInAction(() => {
        field.isDirty = true;
        field.hasError = false;
        field.errorMessage = null;
        field.value = result.data;
      });
    }
  };
};

export const getNumValidator = (field: AtomicComponentState) => {
  const validate = validateNum(field.validations);

  return (value: unknown) => {
    const result = validate(value);

    if (result.error) {
      runInAction(() => {
        field.isDirty = true;
        field.hasError = true;
        field.errorMessage = result.error.errors[0].message;
      });
    } else {
      runInAction(() => {
        field.isDirty = true;
        field.hasError = false;
        field.errorMessage = null;
        field.value = result.data;
      });
    }
  };
};
