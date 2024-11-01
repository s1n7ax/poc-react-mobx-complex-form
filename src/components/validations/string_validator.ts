import { z, ZodOptional, ZodString } from "zod";
import { ValidationDataModel } from "../models/validation-model";

export const useValidator = (rules: ValidationDataModel) => {
  let Schema: ZodString | ZodOptional<ZodString> = z.string();

  if (rules.min) {
    Schema = Schema.min(rules.min.value);
  }

  if (rules.max) {
    Schema = Schema.max(rules.max.value);
  }

  if (!rules.required?.value) {
    Schema = Schema.optional();
  }

  return (value: unknown) => {
    return Schema.safeParse(value);
  };
};
