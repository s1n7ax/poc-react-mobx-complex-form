import { StepperDetails } from "@/components/Stepperr";
import { faker } from "@faker-js/faker";
import { observable } from "mobx";

export enum ComponentType {
  Stepper,
  Step,
  TextField,
}

export const formStore = observable<StepperDetails>({
  id: faker.number.int(),
  type: ComponentType.Stepper,
  errors: [],
  steps: [
    {
      id: faker.number.int(),
      type: ComponentType.Step,
      name: "User Details",
      errors: [],
      components: [
        {
          id: faker.number.int(),
          type: ComponentType.TextField,
          label: "First Name",
          value: "",
          errors: [],
          validation: [
            {
              min: {
                value: 1,
                message: "First name shouldn't be empty",
              },
              max: {
                value: 10,
                message: "First name shouldn't be greater than 10 chars",
              },
            },
          ],
        },
        {
          id: faker.number.int(),
          type: ComponentType.TextField,
          label: "Last Name",
          value: "",
          errors: [],
          validation: [
            {
              min: {
                value: 1,
                message: "First name shouldn't be empty",
              },
              max: {
                value: 10,
                message: "First name shouldn't be greater than 10 chars",
              },
            },
          ],
        },
      ],
    },
    {
      id: faker.number.int(),
      type: ComponentType.Step,
      name: "Organization Details",
      errors: [],
      components: [
        {
          id: faker.number.int(),
          type: ComponentType.TextField,
          label: "Organization name",
          value: "",
          errors: [],
          validation: [
            {
              min: {
                value: 1,
                message: "Organization name shouldn't be empty",
              },
              max: {
                value: 10,
                message: "Organization name shouldn't be greater than 10 chars",
              },
            },
          ],
        },
        {
          id: faker.number.int(),
          type: ComponentType.TextField,
          label: "Organization Address",
          value: "",
          errors: [],
          validation: [
            {
              min: {
                value: 1,
                message: "Organization address shouldn't be empty",
              },
              max: {
                value: 10,
                message:
                  "Organization address shouldn't be greater than 10 chars",
              },
            },
          ],
        },
      ],
    },
  ],
});
