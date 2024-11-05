import Step from "./Step";
import { Stepper as MuiStepper } from "@mui/material";
import { StepperProps } from "./Stepper";

export default function StepperHeader({ data }: StepperProps) {
  return (
    <MuiStepper activeStep={data.activeStep} alternativeLabel>
      {data.children.map((step) => (
        <Step key={step.id} data={step} />
      ))}
    </MuiStepper>
  );
}
