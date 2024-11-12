import { ComponentType, ValueType } from "@/lib/models/component-model";
import { action, makeObservable, observable } from "mobx";

type FieldData = { id: number; cmpType: ComponentType };
type StoredFieldData = { id: number; cmpType: ComponentType; value: ValueType };

export class WatchedFormDataStore {
  watchedFields: Record<number, StoredFieldData> = {};
  forceValidation = false;

  constructor() {
    makeObservable(this, {
      watchedFields: observable,
      setValue: action,
    });
  }

  setValue(field: FieldData, value: ValueType) {
    this.watchedFields[field.id] = {
      id: field.id,
      cmpType: field.cmpType,
      value: value,
    };
  }
}
