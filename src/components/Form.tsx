"use client";

import { ComponentType, formStore } from "@/lib/store/formStore";
import { ReactNode, useRef } from "react";
import Stepper, { StepperData } from "./Stepper";
import { observer } from "mobx-react-lite";

export interface FormProps {
  data: StepperData;
}

const Form = observer(({ data }: FormProps) => {
  console.log("rendering::Form");
  const hasLoadedData = useRef<boolean>(false);

  if (!hasLoadedData.current) {
    formStore.form = data;
    hasLoadedData.current = true;
  }

  let FormComponent: ReactNode;

  if (!formStore.form) {
    return <p>loading</p>;
  }

  if (formStore.form.type === ComponentType.Stepper) {
    FormComponent = <Stepper stepper={formStore.form} />;
  }

  return <form>{FormComponent}</form>;
});

export default Form;
