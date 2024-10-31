import { faker as f } from "@faker-js/faker";
import { ComponentType } from "../store/formStore";
import { StepData } from "@/components/Step";
import { TextFieldData } from "@/components/TextField";
import { SliderData } from "@/components/Slidder";
import { FormGroupData } from "@/components/FormGroup";
import { FormData } from "@/components/Form";

const getFormGroup = (): FormGroupData => ({
  id: f.number.int(),
  type: ComponentType.FormGroup,
  error: null,
  components: [getSliderField(), getTextField()],
});

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

const getFields = (
  count: number,
): (TextFieldData | SliderData | FormGroupData)[] =>
  f.helpers.shuffle([
    ...f.helpers.multiple(getTextField, { count }),
    ...f.helpers.multiple(getSliderField, { count }),
    ...f.helpers.multiple(getFormGroup, { count }),
  ]);

const getStepData = (): StepData[] =>
  f.helpers.multiple(
    () => ({
      id: f.number.int(),
      type: ComponentType.Step,
      name: f.commerce.productName(),
      errors: null,
      components: getFields(3),
    }),
    { count: 3 },
  );

export const data: FormData = {
  id: f.number.int(),
  name: f.word.words(2),
  components: [
    {
      id: f.number.int(),
      type: ComponentType.Stepper,
      activeStep: 0,
      isNextDisabled: false,
      isBackDisabled: true,
      errors: [],
      steps: getStepData(),
    },
  ],
};
