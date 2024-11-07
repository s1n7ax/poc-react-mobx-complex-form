import { Constraint } from "./constraint";

export class LessThanConstraint implements Constraint<number> {
  match(actualValue: number, expectedValue: number): boolean {
    return actualValue > expectedValue;
  }
}
