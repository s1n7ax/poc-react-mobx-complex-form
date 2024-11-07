"use client";

import { createStore } from "@/lib/store/FormStore";
import { observer } from "mobx-react-lite";
import Form from "./Form";
import { GroupComponentModel } from "../lib/models/component-model";
import { WatchedFormDataStore } from "@/lib/store/WatchedFormDataStore";

export interface FormBuilderProps {
  data: GroupComponentModel;
}

export const watchedFormData = new WatchedFormDataStore();

const FormBuilder = observer(({ data }: FormBuilderProps) => {
  const formStore = createStore(data);
  return <Form data={formStore} />;
});

export default FormBuilder;
