"use client";

import { ComponentType } from "@/lib/store/formStore";
import { Stepper } from "@mui/material";
import Step, { StepDetails } from "./Stepp";

export interface StepperDetails {
  id: number;
  type: ComponentType.Stepper;
  errors: string[];
  steps: StepDetails[];
}

export interface StepperProps {
  stepper: StepperDetails;
}

const steps = ["one", "two", "three"];
export default function Stepperr() {
  return (
    <Stepper activeStep={0} alternativeLabel>
      {steps.map((step) => (
        <Step key={step} step={step} />
      ))}
    </Stepper>
  );
}
