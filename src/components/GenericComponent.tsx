import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import { observer } from "mobx-react-lite";
import FieldGroup from "./FieldGroup";
import { ComponentType } from "./models/component-model";
import Slider from "./Slidder";
import Stepper from "./Stepper/Stepper";
import TextField from "./TextField";

export interface GenericComponentProps {
  data: AtomicComponentState | GroupComponentState;
}

const GenericComponent = observer(({ data }: GenericComponentProps) => {
  console.log("rendering::GenericComponent");

  switch (data.cmpType) {
    case ComponentType.FieldGroup:
      return <FieldGroup data={data} />;

    case ComponentType.Stepper:
      return <Stepper data={data} />;

    case ComponentType.Slider:
      return <Slider data={data} />;

    case ComponentType.TextField:
      return <TextField data={data} />;
  }
});

export default GenericComponent;
