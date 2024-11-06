export enum ComponentType {
  Form,
  Stepper,
  Step,
  FieldGroup,
  Slider,
  TextField,
}

export interface ComponentValidationsModel {
  required?: {
    value: boolean;
    message: string;
  };

  min?: {
    value: number;
    message: string;
  };

  max?: {
    value: number;
    message: string;
  };
}

export interface BaseComponentModel {
  id: number;
  name: string;
  label: string;
  cmpType: ComponentType;
}

export interface AtomicComponentModel extends BaseComponentModel {
  cmpType: ComponentType.Slider | ComponentType.TextField;
  validations: ComponentValidationsModel;
  placeholder: string;
  value: number | boolean | string;
  children?: never;
}

export interface GroupComponentModel extends BaseComponentModel {
  cmpType:
    | ComponentType.Form
    | ComponentType.Stepper
    | ComponentType.Step
    | ComponentType.FieldGroup;
  children: (GroupComponentModel | AtomicComponentModel)[];
  validations?: never;
}
