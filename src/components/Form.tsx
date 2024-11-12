"use client";

import { GroupComponentModel } from "@/lib/models/component-model";
import { createStore } from "@/lib/store/store-utils";
import { WatchedFormDataStore } from "@/lib/store/WatchedFormDataStore";
import { observer } from "mobx-react-lite";
import GenericComponentList from "./GenericComponentList";

export interface FormProps {
  data: GroupComponentModel;
  action: (() => void) | (() => Promise<void>);
}

export const watchedFormData = new WatchedFormDataStore();

const Form = observer(({ data, action }: FormProps) => {
  console.log("rendering::Form");
  const formStore = createStore(data);

  return (
    <form action={action} className="p-5 border-2 border-black m-2">
      <GenericComponentList data={formStore} />
    </form>
  );
});

export default Form;
