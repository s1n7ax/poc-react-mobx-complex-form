import { computed, makeObservable, observable } from "mobx";
import { AtomicComponentState } from "./AtomicComponentStore";
import { BaseComponentStore } from "./BaseComponentStore";
import { BaseComponentModel } from "../models/component-model";

export interface GroupComponentConstruct extends BaseComponentModel {
  children: (GroupComponentState | AtomicComponentState)[];
}

export class GroupComponentState extends BaseComponentStore {
  children: (GroupComponentState | AtomicComponentState)[] = [];

  constructor(data: GroupComponentConstruct) {
    super(data);

    makeObservable(this, {
      children: observable,
      hasError: computed,
      isDirty: computed,
    });

    this.children = data.children;
  }

  get hasError(): boolean {
    return this.children.some((c) => c.hasError);
  }

  get isDirty(): boolean {
    return this.children.some((c) => c.isDirty);
  }
}
