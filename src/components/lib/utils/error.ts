import { BaseComponentModel } from "@/components/models/component-model";

export const getErrorStateBasedOnIsDirty = (field: BaseComponentModel) => {
  if (field.isDirty)
    return { hasError: field.hasError, errorMessage: field.errorMessage };

  return { hasError: false, errorMessage: null };
};
