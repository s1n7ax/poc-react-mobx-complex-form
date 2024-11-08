import { ConstraintType, ValueType } from "../models/component-model";
import { EqualConstraint } from "./equal";
import { GreaterThanConstraint } from "./greater";
import { LessThanConstraint } from "./less";

export interface Constraint {
  match(actualValue: ValueType, expectedValue: ValueType): boolean;
}

const constTypeMap = {
  [ConstraintType.GreaterThan]: new GreaterThanConstraint(),
  [ConstraintType.LessThan]: new LessThanConstraint(),
  [ConstraintType.Equal]: new EqualConstraint(),
} as const;

export const constraintFactory = (type: ConstraintType) => {
  return constTypeMap[type];
};
