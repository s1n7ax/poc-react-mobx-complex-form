import { ComponentType } from "@/lib/store/formStore";
import { Box, Button, Stepper as MuiStepper } from "@mui/material";
import Step, { StepData } from "./Step";
import { observer } from "mobx-react-lite";
import Components from "./Components";

export interface StepperData {
  id: number;
  activeStep: number;
  isNextDisabled: boolean;
  isBackDisabled: boolean;
  type: ComponentType.Stepper;
  errors: string[];
  steps: StepData[];
}

export interface StepperProps {
  stepper: StepperData;
}

const Stepper = observer(({ stepper }: StepperProps) => {
  console.log("rendering::Stepper");
  const stepCount = stepper.steps.length;

  const gotoNext = () => {
    const nextStepIndex = stepper.activeStep + 1;

    if (nextStepIndex < stepCount) {
      stepper.activeStep = nextStepIndex;

      stepper.isBackDisabled = false;

      // disable next because it's the final step
      if (nextStepIndex + 1 === stepCount) {
        stepper.isNextDisabled = true;
      }
    }
  };

  const gotoPrev = () => {
    const prevStepIndex = stepper.activeStep - 1;

    if (stepper.activeStep > 0) {
      stepper.activeStep = prevStepIndex;

      stepper.isNextDisabled = false;

      // disable back button because it's the first page
      if (prevStepIndex === 0) stepper.isBackDisabled = true;
    }
  };

  return (
    <>
      <MuiStepper activeStep={stepper.activeStep} alternativeLabel>
        {stepper.steps.map((step) => (
          <Step key={step.id} step={step} />
        ))}
      </MuiStepper>

      <Components fields={stepper.steps[stepper.activeStep].components} />

      <Box>
        <Button
          onClick={gotoPrev}
          disabled={stepper.isBackDisabled}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          onClick={gotoNext}
          disabled={stepper.isNextDisabled}
          variant="outlined"
        >
          Next
        </Button>
      </Box>
    </>
  );
});

export default Stepper;
