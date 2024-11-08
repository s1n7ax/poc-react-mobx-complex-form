import {
  BaseComponentModel,
  ComponentType,
  ComponentValidationsModel,
  ValueType,
} from "@/lib/models/component-model";
import { computed, makeObservable, observable } from "mobx";
import { BaseComponentStore } from "./BaseComponentStore";
import { isOptionalPropEnabled } from "./constraints/is_disabled";

export interface ComponentValidationsStateModel
  extends ComponentValidationsModel {
  required: {
    value: boolean;
    message: string;
  };
}

export interface AtomicComponentConstruct extends BaseComponentModel {
  cmpType: ComponentType.TextField | ComponentType.Slider;
  value: string | boolean | number | null | undefined;
  validations: ComponentValidationsModel;
  isWatched?: boolean;
}

export class AtomicComponentState extends BaseComponentStore {
  value: ValueType = null;
  formValue: ValueType = null;
  validations: ComponentValidationsStateModel = {
    required: { value: false, message: "" },
  };
  isWatched: boolean = false;
  hasError: boolean = true;
  errorMessage: string | null = null;
  isDirty: boolean = false;

  constructor(data: AtomicComponentConstruct) {
    super(data);

    makeObservable(this, {
      value: observable,
      formValue: observable,
      validations: observable,
      hasError: observable,
      errorMessage: observable,
      isDirty: observable,

      isDisabled: computed,
      isHidden: computed,
    });

    this.value = data.value;
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
    return isOptionalPropEnabled(this.conditionalProps?.disabled);
  }

  get isHidden(): boolean {
    return isOptionalPropEnabled(this.conditionalProps?.hidden);
  }
}
