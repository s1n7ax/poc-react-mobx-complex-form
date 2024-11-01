import { FormData } from "@/components/Form";
import { observable } from "mobx";

export const formStore = observable.object<{ form: FormData | null }>({
  form: null,
});
