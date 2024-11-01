import { FormGroupData } from "../FormGroup";
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
  FormGroup,
}

export type GenericComponentsModel =
  | TextFieldData
  | SliderData
  | FormGroupData
  | StepperData
  | StepData;

export interface BaseComponentModel {
  id: number;
  cmpType: ComponentType;
  name: string;
  label: string;
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
