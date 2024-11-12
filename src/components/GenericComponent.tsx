import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import { observer } from "mobx-react-lite";
import { ComponentType } from "../lib/models/component-model";
import FieldGroup from "./FieldGroup";
import Slider from "./Slidder";
import Stepper from "./Stepper/Stepper";
import TextField from "./TextField";
import { StepperComponentState } from "@/lib/store/StepperComponentStore";

export interface GenericComponentProps {
  data: AtomicComponentState | GroupComponentState;
}

const GenericComponent = observer(({ data }: GenericComponentProps) => {
  console.log("rendering::GenericComponent");

  switch (data.cmpType) {
    case ComponentType.FieldGroup:
      return <FieldGroup data={data as GroupComponentState} />;

    case ComponentType.Stepper:
      return <Stepper data={data as StepperComponentState} />;

    case ComponentType.Slider:
      return <Slider data={data as AtomicComponentState} />;

    case ComponentType.TextField:
      return <TextField data={data as AtomicComponentState} />;
  }
});

export default GenericComponent;
