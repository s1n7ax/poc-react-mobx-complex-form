import { Step as MuiStep, StepLabel } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ComponentType, GroupComponentModel } from "./models/component-model";

export interface StepData extends GroupComponentModel {
  cmpType: ComponentType.Step;
}

export interface StepProps {
  step: StepData;
}

const Step = observer(({ step }: StepProps) => {
  console.log("rendering::Step");
  const hasError = step.children.some((c) => c.hasError);

  step.hasError = hasError;

  return (
    <MuiStep>
      <StepLabel>{step.name}</StepLabel>
      {hasError ? "there is an error in child component" : ""}
    </MuiStep>
  );
});

export default Step;
