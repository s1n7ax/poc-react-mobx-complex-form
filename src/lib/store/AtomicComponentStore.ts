import {
  ComponentType,
  ComponentValidationsModel,
  ConditionalProperties,
} from "@/components/models/component-model";
import { makeObservable, observable } from "mobx";

export interface ComponentValidationsStateModel
  extends ComponentValidationsModel {
  required: {
    value: boolean;
    message: string;
  };
}

export interface AtomicComponentConstruct {
  id: number;
  name: string;
  label: string;
  value: string | boolean | number | null | undefined;
  cmpType: ComponentType.TextField | ComponentType.Slider;
  validations: ComponentValidationsModel;
  isWatched?: boolean;
  conditionalProps?: ConditionalProperties;
}

export class AtomicComponentState {
  id: number = 0;
  name: string = "";
  label: string = "";
  value: string | boolean | number | null | undefined = null;
  formValue: string | boolean | number | null | undefined = null;
  cmpType: ComponentType.TextField | ComponentType.Slider =
    ComponentType.TextField;
  conditionalProps?: ConditionalProperties = undefined;
  validations: ComponentValidationsStateModel = {
    required: { value: false, message: "" },
  };
  isWatched: boolean = false;
  hasError: boolean = true;
  errorMessage: string | null = null;
  isDirty: boolean = false;

  constructor(data: AtomicComponentConstruct) {
    makeObservable(this, {
      id: observable,
      name: observable,
      label: observable,
      value: observable,
      formValue: observable,
      cmpType: observable,
      conditionalProps: observable,
      validations: observable,
      hasError: observable,
      errorMessage: observable,
      isDirty: observable,
    });

    this.id = data.id;
    this.name = data.name;
    this.label = data.label;
    this.cmpType = data.cmpType;
    this.value = data.value;
    this.conditionalProps = data.conditionalProps;
    this.isWatched = data.isWatched ?? false;
    this.validations = {
      ...data.validations,
      required: data.validations.required ?? {
        value: false,
        message: "Value is required",
      },
    };
    this.formValue = data.value;
    this.hasError = true;
    this.errorMessage = null;
    this.isDirty = false;
  }
}
