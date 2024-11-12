import {
  AtomicComponentModel,
  ComponentType,
  GroupComponentModel,
} from "@/lib/models/component-model";
import { AtomicComponentState } from "./AtomicComponentStore";
import { GroupComponentState } from "./GroupComponentStore";
import { StepperComponentState } from "./StepperComponentStore";

export const createStore = (
  formData: GroupComponentModel,
): GroupComponentState => {
  const makeGroupStore = (field: GroupComponentModel) => {
    return new GroupComponentState({
      ...field,
      children: field.children.map((c) => makeStore(c)),
    });
  };

  const makeStepperStore = (field: GroupComponentModel) => {
    return new StepperComponentState({
      ...field,
      children: field.children.map((c) => makeStore(c)),
    });
  };

  const makeStore = (
    field: AtomicComponentModel | GroupComponentModel,
  ): AtomicComponentState | GroupComponentState => {
    if (field.cmpType === ComponentType.Stepper) {
      return makeStepperStore(field);
    }
    if (field.children) {
      return makeGroupStore(field);
    } else {
      return new AtomicComponentState(field);
    }
  };

  return makeGroupStore(formData);
};
