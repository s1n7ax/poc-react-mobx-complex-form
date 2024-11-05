import { runInAction } from "mobx";
import { AtomicComponentModel } from "../models/component-model";
import { validateStr } from "../validations/string_validator";
import { validateNum } from "../validations/number_validator";

export const getStrValidator = (
  field: AtomicComponentModel<string | null | undefined>,
) => {
  const validate = validateStr(field.validations);

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

export const getNumValidator = (field: AtomicComponentModel<number>) => {
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
