import { watchedFormData } from "@/components/FormBuilder";
import { constraintFactory } from "@/lib/constraints/constraint";
import { Condition, PropertyCondition } from "@/lib/models/component-model";

export const isOptionalPropEnabled = (
  condition: PropertyCondition | undefined,
): boolean => {
  if (!condition) return false;

  if (condition.when.matchAll) {
    return matchAll(condition.when.matchAll);
  }

  if (condition.when.matchAny) {
    return matchAll(condition.when.matchAny);
  }

  return false;
};

export const matchAll = (conditions: Condition[]): boolean => {
  return conditions.every((rule) => {
    const watchedData = watchedFormData.fields[rule.id];
    if (!watchedData) return false;
    return constraintFactory(rule.constraint).match(
      watchedData.value,
      rule.value,
    );
  });
};

export const matchAny = (conditions: Condition[]): boolean => {
  return conditions.some((rule) => {
    const watchedData = watchedFormData.fields[rule.id];
    if (!watchedData) return false;
    constraintFactory(rule.constraint).match(watchedData.value, rule.value);
  });
};
