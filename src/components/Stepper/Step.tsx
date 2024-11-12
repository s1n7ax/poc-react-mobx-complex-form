import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import { Step as MuiStep, StepLabel } from "@mui/material";
import { observer } from "mobx-react-lite";

export interface StepProps {
  data: GroupComponentState;
}

const Step = observer(({ data, ...rest }: StepProps) => {
  console.log("rendering::Step");

  const childrenHasError = data.children.some((f) => f.error.hasError);
  const childrenIsDirty = data.children.every((f) => f.isDirty);

  return (
    <MuiStep
      {...rest}
      sx={{
        border: "2px solid purple",
      }}
    >
      <StepLabel error={childrenIsDirty && childrenHasError}>
        {data.name}
      </StepLabel>
    </MuiStep>
  );
});

export default Step;
