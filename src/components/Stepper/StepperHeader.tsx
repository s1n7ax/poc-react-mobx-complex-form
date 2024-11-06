import Step from "./Step";
import { Stepper as MuiStepper } from "@mui/material";
import { StepperProps } from "./Stepper";
import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";

export default function StepperHeader({ data }: StepperProps) {
  return (
    <MuiStepper activeStep={0} alternativeLabel>
      {data.children.map((step) => (
        <Step key={step.id} data={step as AtomicComponentState} />
      ))}
    </MuiStepper>
  );
}
