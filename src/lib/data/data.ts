import { faker as f } from "@faker-js/faker";
import { StepData } from "@/components/Step";
import { TextFieldData } from "@/components/TextField";
import { SliderData } from "@/components/Slidder";
import { FieldGroupData } from "@/components/FieldGroup";
import { FormData } from "@/components/Form";
import { ComponentType } from "@/components/models/component-model";
import { StepperData } from "@/components/Stepper";

const getFormGroup = (): FieldGroupData => ({
  id: f.number.int(),
  name: "some name",
  label: f.word.words(2),
  cmpType: ComponentType.FieldGroup,
  children: [getSliderField(), getTextField()],
  isDirty: false,

  hasError: true,
  errorMessage: null,
});

const getTextField = (): TextFieldData => ({
  id: f.number.int(),
  name: "some name",
  cmpType: ComponentType.TextField,
  label: f.lorem.words(f.number.int({ min: 1, max: 3 })),
  placeholder: f.lorem.words(2),
  value: "",

  isDirty: false,
  hasError: true,
  errorMessage: "",
  validations: {
    min: f.helpers.maybe(() => ({
      value: 1,
      message: "This shouldn't be empty",
    })),
    max: {
      value: 10,
      message: "shouldn't be greater",
    },
  },
});

const getSliderField = (): SliderData => ({
  id: f.number.int(),
  name: "some name",
  cmpType: ComponentType.Slider,
  label: f.lorem.words(f.number.int({ min: 1, max: 3 })),
  value: f.number.int({ min: 0, max: 10 }),
  stepSize: 1,
  isDirty: false,
  hasError: true,
  errorMessage: "",
  validations: {
    min: {
      value: 1,
      message: "This shouldn't be empty",
    },
    max: {
      value: f.helpers.arrayElement([5, 10]),
      message: "shouldn't be greater",
    },
  },
});

const getFields = (
  count: number,
): (TextFieldData | SliderData | FieldGroupData)[] =>
  f.helpers.shuffle([
    ...f.helpers.multiple(getTextField, { count }),
    ...f.helpers.multiple(getSliderField, { count }),
    ...f.helpers.multiple(getFormGroup, { count }),
  ]);

const getStepData = (): StepData[] =>
  f.helpers.multiple(
    () => ({
      id: f.number.int(),
      name: f.commerce.productName(),
      label: f.commerce.productName(),
      cmpType: ComponentType.Step,
      isDirty: false,
      hasError: true,
      errorMessage: null,
      children: getFields(50),
    }),
    { count: 3 },
  );

const getStepperData = (): StepperData[] => [
  {
    id: f.number.int(),
    name: "some name",
    label: "form label",
    cmpType: ComponentType.Stepper,
    activeStep: 0,
    isNextDisabled: false,
    isBackDisabled: true,
    isDirty: false,
    hasError: true,
    errorMessage: "",
    children: getStepData(),
  },
];

export const data: FormData = {
  id: f.number.int(),
  cmpType: ComponentType.Form,
  name: f.word.words(2),
  label: f.word.words(2),
  isDirty: false,
  hasError: true,
  errorMessage: "",
  children: getStepperData(),
};
