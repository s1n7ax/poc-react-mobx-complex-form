import formStore from "@/lib/store/FormStore";
import { useRef } from "react";
import { GroupComponentModel } from "../models/component-model";

export default function useFormDataLoader() {
  const hasLoadedData = useRef<boolean>(false);

  return (formData: GroupComponentModel) => {
    if (!hasLoadedData.current) {
      formStore.loadForm(formData);
      hasLoadedData.current = true;
    }
  };
}
