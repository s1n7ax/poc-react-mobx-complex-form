import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { Stepper as MuiStepper } from "@mui/material";
import { observer } from "mobx-react-lite";
import Step from "./Step";
import { StepperProps } from "./Stepper";

const StepperHeader = observer(({ data }: StepperProps) => {
  return (
    <MuiStepper activeStep={data.activeStep} alternativeLabel>
      {data.children.map((step) => (
        <Step key={step.id} data={step as AtomicComponentState} />
      ))}
    </MuiStepper>
  );
});

export default StepperHeader;
