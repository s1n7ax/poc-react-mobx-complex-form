import { makeObservable, observable } from "mobx";
import {
  BaseComponentModel,
  ComponentType,
  ConditionalProperties,
} from "../models/component-model";

export class BaseComponentStore {
  id: number = 0;
  name: string = "";
  label: string = "";
  cmpType: ComponentType = ComponentType.Form;
  conditionalProps?: ConditionalProperties = undefined;

  constructor(data: BaseComponentModel) {
    makeObservable(this, {
      id: observable,
      name: observable,
      label: observable,
      cmpType: observable,
      conditionalProps: observable,
    });

    this.id = data.id;
    this.name = data.name;
    this.label = data.label;
    this.cmpType = data.cmpType;
    this.conditionalProps = data.conditionalProps;
  }
}
