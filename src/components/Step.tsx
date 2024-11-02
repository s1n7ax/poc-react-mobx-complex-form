import { Step as MuiStep, StepLabel } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ComponentType, GroupComponentModel } from "./models/component-model";

export interface StepData extends GroupComponentModel {
  cmpType: ComponentType.Step;
}

export interface StepProps {
  data: StepData;
}

const Step = observer(({ data }: StepProps) => {
  console.log("rendering::Step");
  const hasError = data.children.some((c) => c.hasError);

  data.hasError = hasError;

  return (
    <MuiStep>
      <StepLabel>{data.name}</StepLabel>
      {hasError ? "there is an error in child component" : ""}
    </MuiStep>
  );
});

export default Step;
