import { ComponentType } from "@/components/models/component-model";
import { AtomicComponentState } from "./AtomicComponentStore";
import { computed, makeObservable, observable } from "mobx";

export interface GroupComponentConstruct {
  id: number;
  name: string;
  label: string;
  cmpType:
    | ComponentType.Stepper
    | ComponentType.FieldGroup
    | ComponentType.Step
    | ComponentType.Form;
  children: (GroupComponentState | AtomicComponentState)[];
}

export class GroupComponentState {
  id: number = 0;
  name: string = "";
  label: string = "";
  cmpType:
    | ComponentType.Form
    | ComponentType.Stepper
    | ComponentType.Step
    | ComponentType.FieldGroup = ComponentType.Form;
  children: (GroupComponentState | AtomicComponentState)[] = [];

  constructor(data: GroupComponentConstruct) {
    makeObservable(this, {
      id: observable,
      name: observable,
      label: observable,
      cmpType: observable,
      children: observable,
      hasError: computed,
      isDirty: computed,
    });

    this.id = data.id;
    this.name = data.name;
    this.label = data.label;
    this.cmpType = data.cmpType;
    this.children = data.children;
  }

  get hasError(): boolean {
    return this.children.some((c) => c.hasError);
  }

  get isDirty(): boolean {
    return this.children.some((c) => c.isDirty);
  }
}
