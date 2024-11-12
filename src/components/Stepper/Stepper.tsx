import { StepperComponentState } from "@/lib/store/StepperComponentStore";
import { observer } from "mobx-react-lite";
import StepperBody from "./StepperBody";
import StepperButtons from "./StepperButtons";
import StepperHeader from "./StepperHeader";

export interface StepperProps {
  data: StepperComponentState;
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
          border: "2px solid red",
          padding: "2rem",
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
