"use client";

import { createStore } from "@/lib/store/FormStore";
import { observer } from "mobx-react-lite";
import Form from "./Form";
import { GroupComponentModel } from "./models/component-model";
import { FormWatchedData } from "@/lib/store/WatchedFormValueStore";

export interface FormBuilderProps {
  data: GroupComponentModel;
}

export const watchedFormData = new FormWatchedData();

const FormBuilder = observer(({ data }: FormBuilderProps) => {
  const formStore = createStore(data);
  return <Form data={formStore} />;
});

export default FormBuilder;
