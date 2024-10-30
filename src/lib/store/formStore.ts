import { StepperData } from "@/components/Stepper";
import { observable } from "mobx";

export enum ComponentType {
  Stepper,
  Step,
  TextField,
  Slider,
}

export const formStore = observable.object<{ form: StepperData | null }>({
  form: null,
});
