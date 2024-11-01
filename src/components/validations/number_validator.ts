import { z } from "zod";
import { ValidationDataModel } from "../models/validation-model";

export const useValidator = (rules: ValidationDataModel) => {
  let Schema = z.coerce.number();

  if (rules.min) {
    Schema = Schema.min(rules.min.value);
  }

  if (rules.max) {
    Schema = Schema.max(rules.max.value);
  }

  return (value: unknown) => {
    return Schema.safeParse(value);
  };
};
