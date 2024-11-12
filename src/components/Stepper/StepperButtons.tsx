import { Box, Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { StepperProps } from "./Stepper";
import { useFormStatus } from "react-dom";
import LoadingButton from "@mui/lab/LoadingButton";

const StepperButtons = observer(({ data }: StepperProps) => {
  const { pending } = useFormStatus();

  return (
    <Box
      sx={{
        display: "grid",
        gridAutoFlow: "column",
        gap: "1rem",
      }}
    >
      <Button
        onClick={() => data.prev()}
        disabled={!data.hasPrev || pending}
        variant="outlined"
      >
        Back
      </Button>
      <LoadingButton
        variant="outlined"
        type={data.hasNext ? "button" : "submit"}
        loading={pending}
        onClick={(ev) => {
          data.next();

          if (data.error.hasError) {
            ev.preventDefault();
          }
        }}
        disabled={data.isNextDisabled}
      >
        {data.hasNext ? "Next" : "Submit"}
      </LoadingButton>
    </Box>
  );
});

export default StepperButtons;
