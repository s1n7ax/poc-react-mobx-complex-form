import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import { observer } from "mobx-react-lite";
import GenericComponentList from "./GenericComponentList";

export interface FormGroupProps {
  data: GroupComponentState;
}

const FieldGroup = observer(({ data }: FormGroupProps) => {
  console.log("rendering::FormGroup");

  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        borderColor: data.isDirty && data.hasError ? "red" : "orange",
        borderWidth: "2px",
        padding: "10px",
      }}
    >
      <GenericComponentList data={data} />
    </div>
  );
});

export default FieldGroup;
