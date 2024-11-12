import { watchedFormData } from "@/components/Form";
import {
  BaseComponentModel,
  ComponentType,
  ComponentValidationsModel,
  ValueType,
} from "@/lib/models/component-model";
import { action, computed, makeObservable, observable } from "mobx";
import { BaseComponentStore } from "./BaseComponentStore";
import { numVal, strVal } from "./validations/field_validations";
import { isOptionalPropEnabled } from "./validations/option_checks";

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

export type ErrorModel = { hasError: boolean; message: string };

export class AtomicComponentState extends BaseComponentStore {
  value: ValueType = null;
  formValue: ValueType = null;
  validations: ComponentValidationsStateModel = {
    required: { value: false, message: "" },
  };
  isWatched: boolean = false;
  isDirty: boolean = false;
  children?: never;

  constructor(data: AtomicComponentConstruct) {
    super(data);

    makeObservable(this, {
      value: observable,
      formValue: observable,
      validations: observable,
      isDirty: observable,

      error: computed,
      isDisabled: computed,
      isHidden: computed,

      changeValue: action,
      setDirty: action,
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
    this.isDirty = false;
  }

  get error(): ErrorModel {
    if (this.cmpType === ComponentType.TextField)
      return strVal(this.formValue as string, this.validations);

    if (this.cmpType === ComponentType.Slider)
      return numVal(this.formValue as number, this.validations);

    return { hasError: true, message: "initial error" };
  }

  get isDisabled(): boolean {
    return isOptionalPropEnabled(this.conditionalProps?.disabled);
  }

  get isHidden(): boolean {
    return isOptionalPropEnabled(this.conditionalProps?.hidden);
  }

  changeValue(value: ValueType) {
    this.formValue = value;
    this.isDirty = true;
    if (this.isWatched) {
      watchedFormData.setValue(
        {
          id: this.id,
          cmpType: this.cmpType,
        },
        value,
      );
    }
  }

  setDirty() {
    this.isDirty = true;
  }
}
