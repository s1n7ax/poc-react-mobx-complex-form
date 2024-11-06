"use client";

import { createStore } from "@/lib/store/FormStore";
import { observer } from "mobx-react-lite";
import Form from "./Form";
import { GroupComponentModel } from "./models/component-model";

export interface FormBuilderProps {
  data: GroupComponentModel;
}

const FormBuilder = observer(({ data }: FormBuilderProps) => {
  const formStore = createStore(data);

  return <Form data={formStore} />;
});

export default FormBuilder;
