import { observer } from "mobx-react-lite";
import FieldGroup from "./FieldGroup";
import Form from "./Form";
import {
  ComponentType,
  GenericComponentsModel,
} from "./models/component-model";
import Slider from "./Slidder";
import Step from "./Stepper/Step";
import Stepper from "./Stepper/Stepper";
import TextField from "./TextField";

export interface GenericComponentProps {
  data: GenericComponentsModel;
}

const GenericComponent = observer(({ data }: GenericComponentProps) => {
  console.log("rendering::GenericComponent");

  switch (data.cmpType) {
    case ComponentType.Form:
      return <Form data={data} />;

    case ComponentType.FieldGroup:
      return <FieldGroup data={data} />;

    case ComponentType.Slider:
      return <Slider data={data} />;

    case ComponentType.Stepper:
      return <Stepper data={data} />;

    case ComponentType.Step:
      return <Step data={data} />;

    case ComponentType.TextField:
      return <TextField data={data} />;
  }
});

export default GenericComponent;
