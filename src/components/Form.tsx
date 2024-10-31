"use client";

import { formStore } from "@/lib/store/formStore";
import { observer } from "mobx-react-lite";
import ComponentList, { ComponentData } from "./Components";
import useFormDataLoader from "./hooks/useFormDataLoader";

export interface FormData {
  id: number;
  name: string;
  components: ComponentData[];
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
      <ComponentList componentList={formStore.form.components} />
    </form>
  );
});

export default Form;
