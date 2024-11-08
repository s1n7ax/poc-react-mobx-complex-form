import assert from "assert";
import { ValueType } from "../models/component-model";
import { Constraint } from "./constraint";

export class GreaterThanConstraint implements Constraint {
  match(actualValue: ValueType, expectedValue: ValueType): boolean {
    assert(typeof actualValue === "number", "actual value must be a number");
    assert(
      typeof expectedValue === "number",
      "expected value must be a number",
    );

    return actualValue > expectedValue;
  }
}
