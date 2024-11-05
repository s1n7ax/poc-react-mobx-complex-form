import GenericComponentList from "../GenericComponentList";
import { StepperData } from "./Stepper";

export interface StepperBodyProps {
  data: StepperData;
}

export default function StepperBody({ data }: StepperBodyProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "'1fr 1fr'",
        gridAutoFlow: "row",
        gap: "1rem",
      }}
    >
      <GenericComponentList
        componentList={data.children[data.activeStep].children}
      />
    </div>
  );
}
