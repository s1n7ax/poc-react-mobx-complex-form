import {
  ComponentType,
  ConditionalProperties,
} from "@/lib/models/component-model";
import { computed, makeObservable, observable } from "mobx";
import { AtomicComponentState } from "./AtomicComponentStore";

export interface GroupComponentConstruct {
  id: number;
  name: string;
  label: string;
  cmpType:
    | ComponentType.Stepper
    | ComponentType.FieldGroup
    | ComponentType.Step
    | ComponentType.Form;
  conditionalProps?: ConditionalProperties;
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
  conditionalProps?: ConditionalProperties = undefined;
  children: (GroupComponentState | AtomicComponentState)[] = [];

  constructor(data: GroupComponentConstruct) {
    makeObservable(this, {
      id: observable,
      name: observable,
      label: observable,
      cmpType: observable,
      conditionalProps: observable,
      children: observable,
      hasError: computed,
      isDirty: computed,
    });

    this.id = data.id;
    this.name = data.name;
    this.label = data.label;
    this.cmpType = data.cmpType;
    this.conditionalProps = data.conditionalProps;
    this.children = data.children;
  }

  get hasError(): boolean {
    return this.children.some((c) => c.hasError);
  }

  get isDirty(): boolean {
    return this.children.some((c) => c.isDirty);
  }
}
