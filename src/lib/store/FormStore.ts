import {
  AtomicComponentModel,
  GroupComponentModel,
} from "@/lib/models/component-model";
import { AtomicComponentState } from "./AtomicComponentStore";
import { GroupComponentState } from "./GroupComponentStore";

export const createStore = (
  formData: GroupComponentModel,
): GroupComponentState => {
  const makeGroupStore = (field: GroupComponentModel) => {
    return new GroupComponentState({
      ...field,
      children: field.children.map((c) => makeStore(c)),
    });
  };

  const makeStore = (
    field: AtomicComponentModel | GroupComponentModel,
  ): AtomicComponentState | GroupComponentState => {
    if (field.children) {
      return makeGroupStore(field);
    } else {
      return new AtomicComponentState(field);
    }
  };

  return makeGroupStore(formData);
};
