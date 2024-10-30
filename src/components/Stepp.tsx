import { ComponentType } from "@/lib/store/formStore";
import { Step, StepLabel } from "@mui/material";

export interface StepDetails {
  id: number;
  type: ComponentType.Step;
  name: string;
  errors: any[];
  components: any[];
}

export interface StepProps {
  step: StepDetails;
}

export default function Stepp({ step }: { step: string }) {
  return (
    <Step>
      <StepLabel>{step}</StepLabel>
    </Step>
  );
}
