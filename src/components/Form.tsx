"use client";

import { formStore } from "@/lib/store/formStore";
import { observer } from "mobx-react-lite";
import ComponentList from "./ComponentList";
import useFormDataLoader from "./hooks/useFormDataLoader";
import { ComponentType, GroupComponentModel } from "./models/component-model";

export interface FormData extends GroupComponentModel {
  cmpType: ComponentType.Form;
  label: string;
}

export interface FormProps {
  formData: FormData;
}

const Form = observer(({ formData }: FormProps) => {
  console.log("rendering::Form");

  const loadFormData = useFormDataLoader();
  console.log("loading data");
  loadFormData(formData);

  if (!formStore.form) {
    return <p>loading the form</p>;
  }

  return (
    <form className="p-5">
      <ComponentList componentList={formStore.form.children} />
    </form>
  );
});

export default Form;
