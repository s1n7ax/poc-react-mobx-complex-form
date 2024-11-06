import {
  ComponentType,
  ComponentValidationsModel,
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
}

export class AtomicComponentState {
  id: number = 0;
  name: string = "";
  label: string = "";
  value: string | boolean | number | null | undefined = null;
  formValue: string | boolean | number | null | undefined = null;
  cmpType: ComponentType.TextField | ComponentType.Slider =
    ComponentType.TextField;
  validations: ComponentValidationsStateModel = {
    required: { value: false, message: "" },
  };
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