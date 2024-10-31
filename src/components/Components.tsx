import { ComponentType } from "@/lib/store/formStore";
import { observer } from "mobx-react-lite";
import FormGroup, { FormGroupData } from "./FormGroup";
import Slider, { SliderData } from "./Slidder";
import { StepData } from "./Step";
import Stepper, { StepperData } from "./Stepper";
import TextField, { TextFieldData } from "./TextField";

export type ComponentData =
  | TextFieldData
  | SliderData
  | FormGroupData
  | StepperData
  | StepData;

export interface ComponentListProps {
  componentList: ComponentData[];
}

const ComponentList = observer(({ componentList }: ComponentListProps) => {
  console.log("rendering::Components");

  return (
    <>
      {componentList.map((field) => {
        switch (field.type) {
          case ComponentType.Stepper:
            return <Stepper key={field.id} stepperData={field} />;

          case ComponentType.TextField:
            return <TextField key={field.id} textFieldData={field} />;

          case ComponentType.Slider:
            return <Slider key={field.id} sliderData={field} />;

          case ComponentType.FormGroup:
            return <FormGroup key={field.id} formGroupData={field} />;
        }
      })}
    </>
  );
});

export default ComponentList;
