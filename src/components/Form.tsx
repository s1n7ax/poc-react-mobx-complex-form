"use client";

import { Step, StepLabel, Stepper } from "@mui/material";

const steps = ["form one", "form two", "form three"];

const Form = () => {
  return (
    <div>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Items />
    </div>
  );
};

export default Form;

const Items = () => {
  return (
    <Stepper activeStep={1} alternativeLabel>
      {steps.map((label) => (
        <Item key={label} label={label} />
      ))}
    </Stepper>
  );
};

const Item = ({ label }: { label: string }) => {
  return (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  );
};
