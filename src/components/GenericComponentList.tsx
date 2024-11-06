import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import { observer } from "mobx-react-lite";
import GenericComponent from "./GenericComponent";

export interface ComponentListProps {
  data: GroupComponentState;
}

const GenericComponentList = observer(({ data }: ComponentListProps) => {
  console.log("rendering::Components");

  if (!data) {
    console.trace();
  }

  return (
    <>
      {data.children.map((field) => {
        return <GenericComponent key={field.id} data={field} />;
      })}
    </>
  );
});

export default GenericComponentList;
