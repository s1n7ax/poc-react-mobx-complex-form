import { Constraint } from "./constraint";

export class GreaterThanConstraint implements Constraint<number> {
  match(actualValue: number, expectedValue: number): boolean {
    return actualValue > expectedValue;
  }
}
