import {
  ComponentType,
  ConstraintType,
  GroupComponentModel,
} from "@/lib/models/component-model";

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
          name: "Step One",
          label: "Step One",
          cmpType: ComponentType.Step,
          children: [
            {
              id: 11673490820498,
              name: "Step One",
              cmpType: ComponentType.FieldGroup,
              label: "Step One",
              children: [
                {
                  id: 116724620752093,
                  name: "some name",
                  cmpType: ComponentType.Slider,
                  label: "quis",
                  placeholder: "",
                  value: 0,
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
                  id: 1,
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
              name: "Step Two",
              cmpType: ComponentType.Slider,
              label: "Step Two",
              placeholder: "",
              value: 0,
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
              id: 2,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis",
              placeholder: "",
              value: "",
              isWatched: true,
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
              id: 3,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis rsot rsotin",
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
              id: 4,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis rsot rsotin",
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
              id: 5,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis rsot rsotin",
              placeholder: "",
              value: "",
              conditionalProps: {
                disabled: {
                  when: {
                    matchAll: [
                      {
                        id: 2,
                        constraint: ConstraintType.Equal,
                        value: "world",
                      },
                    ],
                  },
                },
              },
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
              id: 6,
              name: "some name",
              cmpType: ComponentType.FieldGroup,
              label: "quis",
              children: [
                {
                  id: 7,
                  name: "some name",
                  cmpType: ComponentType.Slider,
                  label: "quis",
                  placeholder: "",
                  value: 0,
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
                  id: 8,
                  name: "some name",
                  cmpType: ComponentType.TextField,
                  label: "quis",
                  placeholder: "",
                  value: "",
                  conditionalProps: {
                    disabled: {
                      when: {
                        matchAll: [
                          {
                            id: 2,
                            constraint: ConstraintType.Equal,
                            value: "hello",
                          },
                        ],
                      },
                    },
                  },
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
              id: 10,
              name: "some name",
              cmpType: ComponentType.FieldGroup,
              label: "quis",
              children: [
                {
                  id: 11,
                  name: "some name",
                  cmpType: ComponentType.Slider,
                  label: "quis",
                  placeholder: "",
                  value: 0,
                  isWatched: true,
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
                  id: 12,
                  name: "some name",
                  cmpType: ComponentType.TextField,
                  label: "quis",
                  placeholder: "",
                  value: "",
                  conditionalProps: {
                    hidden: {
                      when: {
                        matchAll: [
                          {
                            id: 11,
                            constraint: ConstraintType.GreaterThan,
                            value: 5,
                          },
                          {
                            id: 2,
                            constraint: ConstraintType.Equal,
                            value: "hello",
                          },
                        ],
                      },
                    },
                  },
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
        {
          id: 6437491923947,
          name: "Step Two",
          label: "Step Two",
          cmpType: ComponentType.Step,
          children: [
            {
              id: 116790820498,
              name: "some name",
              cmpType: ComponentType.FieldGroup,
              label: "quis",
              children: [
                {
                  id: 1167620752093,
                  name: "some name",
                  cmpType: ComponentType.Slider,
                  label: "quis",
                  placeholder: "",
                  value: 0,
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
                  id: 1,
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
              id: 1167240510608,
              name: "some name",
              cmpType: ComponentType.Slider,
              label: "quis",
              placeholder: "",
              value: 0,
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
              id: 39847,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis",
              placeholder: "",
              value: "",
              isWatched: true,
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
              id: 3923874,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis rsot rsotin",
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
              id: 42938479012,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis rsot rsotin",
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
              id: 5293342,
              name: "some name",
              cmpType: ComponentType.TextField,
              label: "quis rsot rsotin",
              placeholder: "",
              value: "",
              conditionalProps: {
                disabled: {
                  when: {
                    matchAll: [
                      {
                        id: 2,
                        constraint: ConstraintType.Equal,
                        value: "world",
                      },
                    ],
                  },
                },
              },
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
              id: 92374,
              name: "some name",
              cmpType: ComponentType.FieldGroup,
              label: "quis",
              children: [
                {
                  id: 7,
                  name: "some name",
                  cmpType: ComponentType.Slider,
                  label: "quis",
                  placeholder: "",
                  value: 0,
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
                  id: 239874239,
                  name: "some name",
                  cmpType: ComponentType.TextField,
                  label: "quis",
                  placeholder: "",
                  value: "",
                  conditionalProps: {
                    disabled: {
                      when: {
                        matchAll: [
                          {
                            id: 2,
                            constraint: ConstraintType.Equal,
                            value: "hello",
                          },
                        ],
                      },
                    },
                  },
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
              id: 1029387434,
              name: "some name",
              cmpType: ComponentType.FieldGroup,
              label: "quis",
              children: [
                {
                  id: 11,
                  name: "some name",
                  cmpType: ComponentType.Slider,
                  label: "quis",
                  placeholder: "",
                  value: 0,
                  isWatched: true,
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
                  id: 1292374,
                  name: "some name",
                  cmpType: ComponentType.TextField,
                  label: "quis",
                  placeholder: "",
                  value: "",
                  conditionalProps: {
                    hidden: {
                      when: {
                        matchAll: [
                          {
                            id: 11,
                            constraint: ConstraintType.GreaterThan,
                            value: 5,
                          },
                          {
                            id: 2,
                            constraint: ConstraintType.Equal,
                            value: "hello",
                          },
                        ],
                      },
                    },
                  },
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
    },
  ],
};
