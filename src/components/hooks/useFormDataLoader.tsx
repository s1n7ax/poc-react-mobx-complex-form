import { formStore } from "@/lib/store/formStore";
import { useRef } from "react";
import { FormData } from "../Form";

export default function useFormDataLoader() {
  const hasLoadedData = useRef<boolean>(false);

  return (formData: FormData) => {
    if (!hasLoadedData.current) {
      formStore.form = formData;
      hasLoadedData.current = true;
    }
  };
}
