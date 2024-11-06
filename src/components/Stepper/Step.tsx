import { AtomicComponentState } from "@/lib/store/AtomicComponentStore";
import { Step as MuiStep, StepLabel } from "@mui/material";
import { observer } from "mobx-react-lite";

export interface StepProps {
  data: AtomicComponentState;
}

const Step = observer(({ data, ...rest }: StepProps) => {
  console.log("rendering::Step");

  return (
    <MuiStep
      {...rest}
      sx={{
        border: "2px solid purple",
      }}
    >
      <StepLabel>{data.name}</StepLabel>
      {data.hasError ? "there is an error in child component" : ""}
    </MuiStep>
  );
});

export default Step;
