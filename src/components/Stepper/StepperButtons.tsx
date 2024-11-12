import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { StepperProps } from "./Stepper";

const StepperButtons = observer(({ data }: StepperProps) => {
  return (
    <div>
      <Button
        onClick={() => data.prev()}
        disabled={!data.hasPrev}
        variant="outlined"
      >
        Back
      </Button>
      <Button
        type={data.hasNext ? "button" : "submit"}
        onClick={() => data.next()}
        disabled={data.isNextDisabled}
        variant="outlined"
      >
        {data.hasNext ? "Next" : "Submit"}
      </Button>
    </div>
  );
});

export default StepperButtons;
