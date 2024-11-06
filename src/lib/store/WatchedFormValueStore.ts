import { ComponentType, ValueType } from "@/components/models/component-model";
import { action, makeObservable, observable } from "mobx";

type FieldData = { id: number; cmpType: ComponentType };

export class FormWatchedData {
  fields: { id: number; cmpType: ComponentType; value: ValueType }[] = [];

  constructor() {
    makeObservable(this, {
      fields: observable,
      setValue: action,
    });
  }

  setValue(field: FieldData, value: ValueType) {
    const index = this.fields.findIndex((f) => f.id === field.id);

    if (~index) {
      this.fields[index].value = value;
    }

    this.fields.push({
      id: field.id,
      cmpType: field.cmpType,
      value: value,
    });
  }
}
