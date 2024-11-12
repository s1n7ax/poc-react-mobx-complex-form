import { watchedFormData } from "@/components/FormBuilder";
import {
  Condition,
  ConstraintType,
  PropertyCondition,
  ValueType,
} from "@/lib/models/component-model";
import assert from "assert";

export const isOptionalPropEnabled = (
  condition: PropertyCondition | undefined,
): boolean => {
  if (!condition) return false;

  return (
    condition.when.matchAll?.every(predicate) ??
    condition.when.matchAny?.some(predicate) ??
    false
  );
};

const predicate = (rule: Condition) => {
  const watchedData = watchedFormData.watchedFields[rule.id];
  if (!watchedData) return false;

  const check = constraintFactory(rule.constraint);
  return check(watchedData.value, rule.value);
};

type Constraint = (actualValue: ValueType, expectedValue: ValueType) => boolean;

const isEqual: Constraint = (
  actualValue: ValueType,
  expectedValue: ValueType,
) => actualValue === expectedValue;

const isGreaterOrLess = (isGreaterCheck: boolean): Constraint => {
  return (actualValue: ValueType, expectedValue: ValueType) => {
    assert(
      typeof actualValue === "number",
      "actual value should be a number to check greater than constraint",
    );

    assert(
      typeof expectedValue === "number",
      "expected value should be a number to check greater than constraint",
    );

    if (isGreaterCheck) return expectedValue < actualValue;
    else return expectedValue > actualValue;
  };
};

const constTypeMap = {
  [ConstraintType.GreaterThan]: isGreaterOrLess(true),
  [ConstraintType.LessThan]: isGreaterOrLess(false),
  [ConstraintType.Equal]: isEqual,
} as const;

export const constraintFactory = (type: ConstraintType) => {
  return constTypeMap[type];
};
