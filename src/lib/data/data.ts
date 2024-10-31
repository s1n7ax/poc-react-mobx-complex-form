import { StepperData } from "@/components/Stepper";
import { faker as f } from "@faker-js/faker";
import { ComponentType } from "../store/formStore";
import { StepData } from "@/components/Step";
import { TextFieldData } from "@/components/TextField";
import { SliderData } from "@/components/Slidder";

const getTextField = (): TextFieldData => ({
  id: f.number.int(),
  type: ComponentType.TextField,
  label: f.lorem.words(f.number.int({ min: 1, max: 3 })),
  placeholder: f.lorem.words(2),
  value: "",
  error: null,
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
  type: ComponentType.Slider,
  label: f.lorem.words(f.number.int({ min: 1, max: 3 })),
  placeholder: f.lorem.words(2),
  value: f.number.int({ min: 0, max: 10 }),
  stepSize: 1,
  error: null,
  validations: {
    min: f.helpers.maybe(() => ({
      value: 1,
      message: "This shouldn't be empty",
    })),
    max: {
      value: f.helpers.arrayElement([5, 10]),
      message: "shouldn't be greater",
    },
  },
});

const getFields = (count: number): (TextFieldData | SliderData)[] =>
  f.helpers.shuffle([
    ...f.helpers.multiple(getTextField, { count }),
    ...f.helpers.multiple(getSliderField, { count }),
  ]);

const getStepData = (): StepData[] =>
  f.helpers.multiple(
    () => ({
      id: f.number.int(),
      type: ComponentType.Step,
      name: f.commerce.productName(),
      errors: null,
      components: getFields(1000),
    }),
    { count: 3 },
  );

export const data: StepperData = {
  id: f.number.int(),
  type: ComponentType.Stepper,
  activeStep: 0,
  isNextDisabled: false,
  isBackDisabled: true,
  errors: [],
  steps: getStepData(),
};
