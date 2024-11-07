import { watchedFormData } from "@/components/FormBuilder";
import {
  ComponentType,
  ComponentValidationsModel,
  ConditionalProperties,
} from "@/lib/models/component-model";
import { computed, makeObservable, observable } from "mobx";
import { constraintFactory } from "../constraints/constraint";

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

      isDisabled: computed,
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

  get isDisabled(): boolean {
    const propCond = this.conditionalProps?.disabled;

    if (!propCond) return false;

    if (propCond.when.matchAll)
      return propCond.when.matchAll.every((pred) => {
        const watchedData = watchedFormData.fields[pred.id];
        return watchedData?.value === pred.value;
      });

    if (propCond.when.matchAny) {
      return propCond.when.matchAny.every((pred) => {
        const watchedData = watchedFormData.fields[pred.id];
        return watchedData?.value === pred.value;
      });
    }

    return false;
  }

  get isHidden(): boolean {
    const propCond = this.conditionalProps?.hidden;

    if (!propCond) return false;

    if (propCond.when.matchAll)
      return propCond.when.matchAll.every((pred) => {
        const watchedData = watchedFormData.fields[pred.id];

        if (watchedData?.value && typeof watchedData.value === "number")
          return constraintFactory(pred.constraint).match(
            watchedData.value,
            pred.value as number,
          );
      });

    if (propCond.when.matchAny) {
      return propCond.when.matchAny.every((pred) => {
        const watchedData = watchedFormData.fields[pred.id];
        return watchedData?.value === pred.value;
      });
    }

    return false;
  }
}
