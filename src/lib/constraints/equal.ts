import { ValueType } from "../models/component-model";
import { Constraint } from "./constraint";

export class EqualConstraint implements Constraint<ValueType> {
  match(actualValue: ValueType, expectedValue: ValueType): boolean {
    return actualValue === expectedValue;
  }
}
