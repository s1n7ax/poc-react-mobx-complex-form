"use client";

import { formStore } from "@/lib/store/formStore";
import { observer } from "mobx-react-lite";
import GenericComponentList from "./GenericComponentList";
import useFormDataLoader from "./hooks/useFormDataLoader";
import { ComponentType, GroupComponentModel } from "./models/component-model";

export interface FormData extends GroupComponentModel {
  cmpType: ComponentType.Form;
}

export interface FormProps {
  data: FormData;
}

const Form = observer(({ data }: FormProps) => {
  console.log("rendering::Form");

  const loadFormData = useFormDataLoader();
  console.log("loading data");
  loadFormData(data);

  if (!formStore.form) return;

  return (
    <form className="p-5">
      <GenericComponentList componentList={formStore.form.children} />
    </form>
  );
});

export default Form;
