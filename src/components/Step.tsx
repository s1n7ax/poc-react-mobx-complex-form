import { ComponentType } from "@/lib/store/formStore";
import { Step as MuiStep, StepLabel } from "@mui/material";
import { ComponentsData } from "./Components";
import { observer } from "mobx-react-lite";

export interface StepData {
  id: number;
  type: ComponentType.Step;
  name: string;
  errors: string | null;
  components: ComponentsData[];
}

export interface StepProps {
  step: StepData;
}

const Step = observer(({ step }: StepProps) => {
  console.log("rendering::Step");
  const hasErrors = step.components.some((c) => c.error);

  return (
    <MuiStep>
      <StepLabel>{step.name}</StepLabel>
      {hasErrors ? "there is an error in child component" : ""}
    </MuiStep>
  );
});

export default Step;
