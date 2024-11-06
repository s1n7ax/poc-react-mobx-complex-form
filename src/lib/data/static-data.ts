import {
  ComponentType,
  GroupComponentModel,
} from "@/components/models/component-model";

export const staticData: GroupComponentModel = {
  id: 685296423904867,
  cmpType: ComponentType.Form,
  name: "tender how",
  label: "who deduction",
  children: [
    {
      id: 188556433220391,
      name: "some name",
      label: "form label",
      cmpType: ComponentType.Stepper,
      children: [
        {
          id: 6467491923947,
          name: "Small Wooden Car",
          label: "Oriental Steel Salad",
          cmpType: ComponentType.Step,
          children: [
            {
              id: 11673490820498,
              name: "some name",
              cmpType: ComponentType.FieldGroup,
              label: "quis",
              children: [
                {
                  id: 116724620752093,
                  name: "some name",
                  cmpType: ComponentType.Slider,
                  label: "quis",
                  placeholder: "",
                  value: "",
                  validations: {
                    required: {
                      value: true,
                      message: "hey this is required",
                    },
                    min: {
                      value: 1,
                      message: "This shouldn't be empty",
                    },
                    max: {
                      value: 10,
                      message: "shouldn't be greater",
                    },
                  },
                },
                {
                  id: 1167246207510639,
                  name: "some name",
                  cmpType: ComponentType.TextField,
                  label: "quis",
                  placeholder: "",
                  value: "",
                  validations: {
                    required: {
                      value: true,
                      message: "hey this is required",
                    },
                    min: {
                      value: 1,
                      message: "This shouldn't be empty",
                    },
                    max: {
                      value: 10,
                      message: "shouldn't be greater",
                    },
                  },
                },
              ],
            },
            {
              id: 1167246207510608,
              name: "some name",
              cmpType: ComponentType.Slider,
              label: "quis",
              placeholder: "",
              value: "",
              validations: {
                required: {
                  value: true,
                  message: "hey this is required",
                },
                min: {
                  value: 1,
                  message: "This shouldn't be empty",
                },
                max: {
                  value: 10,
                  message: "shouldn't be greater",
                },
              },
            },
            {
              id: 116724620751234,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis",
              placeholder: "",
              value: "",
              validations: {
                required: {
                  value: true,
                  message: "hey this is required",
                },
                min: {
                  value: 1,
                  message: "This shouldn't be empty",
                },
                max: {
                  value: 10,
                  message: "shouldn't be greater",
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
