import { observer } from "mobx-react-lite";
import ChildStateBoundary from "./ChildStateBoundary";
import GenericComponentList from "./GenericComponentList";
import { ComponentType, GroupComponentModel } from "./models/component-model";
import { SliderData } from "./Slidder";
import { TextFieldData } from "./TextField";

export type ComponentsData = TextFieldData | SliderData;

export interface FieldGroupData extends GroupComponentModel {
  cmpType: ComponentType.FieldGroup;
}

export interface FormGroupProps {
  data: FieldGroupData;
}

const FieldGroup = observer(({ data }: FormGroupProps) => {
  console.log("rendering::FormGroup");

  return (
    <ChildStateBoundary data={data}>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          borderColor: data.isDirty && data.hasError ? "red" : "green",
          borderWidth: "1px",
          padding: "10px",
        }}
      >
        <GenericComponentList componentList={data.children} />
      </div>
    </ChildStateBoundary>
  );
});

export default FieldGroup;
