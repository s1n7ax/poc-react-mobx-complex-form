import { action, computed, makeObservable, observable } from "mobx";
import { BaseComponentModel } from "../models/component-model";
import { AtomicComponentState } from "./AtomicComponentStore";
import { BaseComponentStore } from "./BaseComponentStore";

export type ErrorModel = { hasError: boolean };

export interface GroupComponentConstruct extends BaseComponentModel {
  children: (GroupComponentState | AtomicComponentState)[];
}

export class GroupComponentState extends BaseComponentStore {
  children: (GroupComponentState | AtomicComponentState)[] = [];

  constructor(data: GroupComponentConstruct) {
    super(data);

    makeObservable(this, {
      children: observable,
      isDirty: computed,

      error: computed,
    });

    this.children = data.children;
  }

  get error(): ErrorModel {
    const hasError = this.children.some((c) => c.error.hasError);
    return { hasError };
  }

  get isDirty(): boolean {
    return this.children.some((c) => c.isDirty);
  }

  setDirty() {
    this.children.forEach((f) => {
      f.setDirty();
    });
  }
}
