import { observer } from "mobx-react-lite";
import { ComponentType, GroupComponentModel } from "../models/component-model";
import { StepData } from "./Step";
import StepperBody from "./StepperBody";
import StepperButtons from "./StepperButtons";
import StepperHeader from "./StepperHeader";

export interface StepperData extends GroupComponentModel {
  activeStep: number;
  isNextDisabled: boolean;
  isBackDisabled: boolean;
  cmpType: ComponentType.Stepper;
  children: StepData[];
}

export interface StepperProps {
  data: StepperData;
}

const Stepper = observer(({ data }: StepperProps) => {
  console.log("rendering::Stepper");

  return (
    <>
      <div
        style={{
          display: "grid",
          gridColumn: "auto",
          gap: "2rem",
        }}
      >
        <StepperHeader data={data} />
        <StepperBody data={data} />
        <StepperButtons data={data} />
      </div>
    </>
  );
});

export default Stepper;
