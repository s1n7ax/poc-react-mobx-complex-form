import { Button } from "@mui/material";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { StepperProps } from "./Stepper";

const StepperButtons = observer(({ data }: StepperProps) => {
  const stepCount = data.children.length;

  const gotoNext = () => {
    const nextStepIndex = data.activeStep + 1;

    if (nextStepIndex < stepCount) {
      runInAction(() => {
        data.activeStep = nextStepIndex;
        data.isBackDisabled = false;
      });

      // disable next because it's the final step
      if (nextStepIndex + 1 === stepCount)
        runInAction(() => {
          data.isNextDisabled = true;
        });
    }
  };

  const gotoPrev = () => {
    const prevStepIndex = data.activeStep - 1;

    if (data.activeStep > 0) {
      runInAction(() => {
        data.activeStep = prevStepIndex;
        data.isNextDisabled = false;
      });

      // disable back button because it's the first page
      if (prevStepIndex === 0)
        runInAction(() => {
          data.isBackDisabled = true;
        });
    }
  };

  return (
    <div>
      <Button
        onClick={gotoPrev}
        disabled={data.isBackDisabled}
        variant="outlined"
      >
        Back
      </Button>
      <Button
        onClick={gotoNext}
        disabled={data.isNextDisabled}
        variant="outlined"
      >
        Next
      </Button>
    </div>
  );
});

export default StepperButtons;
