import { action, computed, makeObservable, observable } from "mobx";
import {
  GroupComponentConstruct,
  GroupComponentState,
} from "./GroupComponentStore";

export class StepperComponentState extends GroupComponentState {
  activeStep = 0;
  stepCount = 0;
  didClickNext: boolean[] = [];

  constructor(data: GroupComponentConstruct) {
    super(data);

    makeObservable(this, {
      activeStep: observable,
      didClickNext: observable,

      hasNext: computed,
      hasPrev: computed,
      isNextDisabled: computed,
      activeHasError: computed,

      next: action,
      prev: action,
    });

    this.stepCount = data.children.length;
  }

  next() {
    this.didClickNext[this.activeStep] = true;

    const children = (this.children[this.activeStep] as GroupComponentState)
      .children;

    const chidHasError = children.some((f) => f.error.hasError);

    if (chidHasError) {
      children.forEach((f) => f.setDirty());
    } else {
      if (this.hasNext) {
        this.activeStep += 1;
      }
    }
  }

  prev() {
    if (this.hasPrev) {
      this.activeStep -= 1;
    }
  }

  get hasNext(): boolean {
    return this.activeStep < this.stepCount - 1;
  }

  get hasPrev(): boolean {
    return this.activeStep > 0;
  }

  get isNextDisabled(): boolean {
    if (this.didClickNext[this.activeStep]) {
      return this.children[this.activeStep].error.hasError;
    } else {
      return false;
    }
  }

  get activeHasError(): boolean {
    return (
      this.children[this.activeStep]?.children?.some((f) => f.error.hasError) ??
      true
    );
  }
}
