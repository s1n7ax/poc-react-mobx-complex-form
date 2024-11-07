import { ComponentType, ValueType } from "@/components/models/component-model";
import { action, makeObservable, observable } from "mobx";

type FieldData = { id: number; cmpType: ComponentType };
type StoredFieldData = { id: number; cmpType: ComponentType; value: ValueType };

export class WatchedFormDataStore {
  fields: Record<number, StoredFieldData> = {};

  constructor() {
    makeObservable(this, {
      fields: observable,
      setValue: action,
    });
  }

  setValue(field: FieldData, value: ValueType) {
    this.fields[field.id] = {
      id: field.id,
      cmpType: field.cmpType,
      value: value,
    };
  }
}
