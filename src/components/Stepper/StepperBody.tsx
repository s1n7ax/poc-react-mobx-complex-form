import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import GenericComponentList from "../GenericComponentList";
import { StepperProps } from "./Stepper";
import { observer } from "mobx-react-lite";

const StepperBody = observer(({ data }: StepperProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
      }}
    >
      <GenericComponentList
        data={data.children[data.activeStep] as GroupComponentState}
      />
    </div>
  );
});

export default StepperBody;
