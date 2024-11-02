import { ReactNode } from "react";
import FieldGroup from "./FieldGroup";
import Form from "./Form";
import {
  ComponentType,
  GenericComponentsModel,
} from "./models/component-model";
import Slider from "./Slidder";
import Step from "./Step";
import Stepper from "./Stepper";
import TextField from "./TextField";

export interface GenericComponentProps {
  data: GenericComponentsModel;
}

export default function GenericComponent({ data }: GenericComponentProps) {
  console.log("rendering::generic component");

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
}
