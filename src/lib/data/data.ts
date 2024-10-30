import { StepperData } from "@/components/Stepper";
import { faker } from "@faker-js/faker";
import { ComponentType } from "../store/formStore";
import { StepData } from "@/components/Step";
import { TextFieldData } from "@/components/TextField";

const getTextFields = (count: number): TextFieldData[] =>
  faker.helpers.multiple(
    () => ({
      id: faker.number.int(),
      type: ComponentType.TextField,
      label: faker.lorem.words(faker.number.int(2)),
      placeholder: faker.lorem.words(2),
      value: "",
      errors: null,
      validations: {
        min: {
          value: 1,
          message: "This shouldn't be empty",
        },
        max: {
          value: 10,
          message: "shouldn't be greater",
        },
      },
    }),
    { count },
  );

const getStepData = (): StepData[] =>
  faker.helpers.multiple(
    () => ({
      id: faker.number.int(),
      type: ComponentType.Step,
      name: faker.commerce.productName(),
      errors: null,
      components: getTextFields(faker.number.int({ min: 10, max: 30 })),
    }),
    { count: 3 },
  );

export const data: StepperData = {
  id: faker.number.int(),
  type: ComponentType.Stepper,
  activeStep: 0,
  isNextDisabled: false,
  isBackDisabled: true,
  errors: [],
  steps: getStepData(),
};
