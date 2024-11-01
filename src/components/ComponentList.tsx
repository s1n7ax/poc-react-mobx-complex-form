import { observer } from "mobx-react-lite";
import FormGroup from "./FormGroup";
import Slider from "./Slidder";
import Stepper from "./Stepper";
import TextField from "./TextField";
import {
  ComponentType,
  GenericComponentsModel,
} from "./models/component-model";

export interface ComponentListProps {
  componentList: GenericComponentsModel[];
}

const ComponentList = observer(({ componentList }: ComponentListProps) => {
  console.log("rendering::Components");

  return (
    <>
      {componentList.map((field) => {
        switch (field.cmpType) {
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
