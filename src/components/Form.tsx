import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import { observer } from "mobx-react-lite";
import GenericComponentList from "./GenericComponentList";

export interface FormProps {
  data: GroupComponentState;
}

const Form = observer(({ data }: FormProps) => {
  console.log("rendering::Form", data);

  return (
    <form className="p-5 border-2 border-black m-2">
      <GenericComponentList data={data} />
    </form>
  );
});

export default Form;
