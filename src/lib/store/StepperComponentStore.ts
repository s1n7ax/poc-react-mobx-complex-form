import { action, computed, makeObservable, observable } from "mobx";
import {
  GroupComponentConstruct,
  GroupComponentState,
} from "./GroupComponentStore";

export class StepperComponentState extends GroupComponentState {
  activeStep = 0;
  stepCount = 0;
  didClickNext = false;

  constructor(data: GroupComponentConstruct) {
    super(data);

    makeObservable(this, {
      activeStep: observable,
      didClickNext: observable,

      hasNext: computed,
      hasPrev: computed,
      isNextDisabled: computed,

      next: action,
      prev: action,
    });

    this.stepCount = data.children.length;
  }

  next() {
    this.didClickNext = true;

    if (this.hasNext) {
      const children = (this.children[this.activeStep] as GroupComponentState)
        .children;

      const chidHasError = children.some((f) => f.error.hasError);

      if (chidHasError) {
        children.filter((f) => f.setDirty());
      } else {
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
    if (this.didClickNext) {
      console.log(">>>>>>>>>>>");
      return this.children[this.activeStep].error.hasError;
    } else {
      console.log("***********");
      return false;
    }
  }
}
