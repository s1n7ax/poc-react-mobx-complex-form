import { ComponentValidationsModel } from "@/lib/models/component-model";

type Result = { hasError: boolean; message: string };

export const strVal = (
  value: string,
  conditions: ComponentValidationsModel,
): Result => {
  const trimmedValue = value.trim();

  if (conditions.required && trimmedValue === "")
    return { hasError: true, message: conditions.required.message };

  if (conditions.min && trimmedValue.length < conditions.min.value)
    return { hasError: true, message: conditions.min.message };

  if (conditions.max && trimmedValue.length > conditions.max.value)
    return { hasError: true, message: conditions.max.message };

  return { hasError: false, message: "" };
};

export const numVal = (
  value: number,
  conditions: ComponentValidationsModel,
): Result => {
  if (conditions.min && value < conditions.min.value)
    return { hasError: true, message: conditions.min.message };

  if (conditions.max && value > conditions.max.value)
    return { hasError: true, message: conditions.max.message };

  return { hasError: false, message: "" };
};
