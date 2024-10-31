import { Step as MuiStep, StepLabel } from "@mui/material";
import { ComponentData } from "./Components";
import { observer } from "mobx-react-lite";
import { ComponentType } from "./models/ComponentType";
import { GroupComponentModel } from "./models/ComponentModel";

export interface StepData extends GroupComponentModel<boolean> {
  type: ComponentType.Step;
  components: ComponentData[];
}

export interface StepProps {
  step: StepData;
}

const Step = observer(({ step }: StepProps) => {
  console.log("rendering::Step");
  const hasError = step.components.some((c) => c.error);

  step.error = hasError;

  return (
    <MuiStep>
      <StepLabel>{step.name}</StepLabel>
      {hasError ? "there is an error in child component" : ""}
    </MuiStep>
  );
});

export default Step;
