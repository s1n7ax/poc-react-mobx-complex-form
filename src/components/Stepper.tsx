import { Box, Button, Stepper as MuiStepper } from "@mui/material";
import Step, { StepData } from "./Step";
import { observer } from "mobx-react-lite";
import ComponentList from "./ComponentList";
import { runInAction } from "mobx";
import { ComponentType, GroupComponentModel } from "./models/component-model";

export interface StepperData extends GroupComponentModel {
  activeStep: number;
  isNextDisabled: boolean;
  isBackDisabled: boolean;
  cmpType: ComponentType.Stepper;
  children: StepData[];
}

export interface StepperProps {
  stepperData: StepperData;
}

const Stepper = observer(({ stepperData }: StepperProps) => {
  console.log("rendering::Stepper");

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridColumn: "auto",
          gap: "2rem",
        }}
      >
        <MuiStepper activeStep={stepperData.activeStep} alternativeLabel>
          {stepperData.children.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </MuiStepper>

        <Box
          sx={{
            display: "grid",
            gridTemplate: "'1fr 1fr'",
            gridAutoFlow: "row",
            gap: "1rem",
          }}
        >
          <ComponentList
            componentList={
              stepperData.children[stepperData.activeStep].children
            }
          />
        </Box>
        <StepperButtons stepperData={stepperData} />
      </Box>
    </>
  );
});

const StepperButtons = observer(({ stepperData }: StepperProps) => {
  const stepCount = stepperData.children.length;

  const gotoNext = () => {
    const nextStepIndex = stepperData.activeStep + 1;

    if (nextStepIndex < stepCount) {
      runInAction(() => {
        stepperData.activeStep = nextStepIndex;
        stepperData.isBackDisabled = false;
      });

      // disable next because it's the final step
      if (nextStepIndex + 1 === stepCount)
        runInAction(() => {
          stepperData.isNextDisabled = true;
        });
    }
  };

  const gotoPrev = () => {
    const prevStepIndex = stepperData.activeStep - 1;

    if (stepperData.activeStep > 0) {
      runInAction(() => {
        stepperData.activeStep = prevStepIndex;
        stepperData.isNextDisabled = false;
      });

      // disable back button because it's the first page
      if (prevStepIndex === 0)
        runInAction(() => {
          stepperData.isBackDisabled = true;
        });
    }
  };

  return (
    <Box>
      <Button
        onClick={gotoPrev}
        disabled={stepperData.isBackDisabled}
        variant="outlined"
      >
        Back
      </Button>
      <Button
        onClick={gotoNext}
        disabled={stepperData.isNextDisabled}
        variant="outlined"
      >
        Next
      </Button>
    </Box>
  );
});

export default Stepper;
