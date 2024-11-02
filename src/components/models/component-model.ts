import { FieldGroupData } from "../FieldGroup";
import { FormData } from "../Form";
import { SliderData } from "../Slidder";
import { StepData } from "../Step";
import { StepperData } from "../Stepper";
import { TextFieldData } from "../TextField";
import { ValidationDataModel } from "./validation-model";

export enum ComponentType {
  Form,
  Stepper,
  Step,
  TextField,
  Slider,
  FieldGroup,
}

export type GenericComponentsModel =
  | FormData
  | TextFieldData
  | SliderData
  | FieldGroupData
  | StepperData
  | StepData;

export interface BaseComponentModel {
  id: number;
  cmpType: ComponentType;
  name: string;
  label: string;
  isDirty: false;

  // showError: boolean;
  hasError: boolean;
  errorMessage: string | null | undefined;
}

export interface AtomicComponentModel<TValue> extends BaseComponentModel {
  value: TValue;
  validations: ValidationDataModel;
}

export interface GroupComponentModel extends BaseComponentModel {
  children: GenericComponentsModel[];
}
