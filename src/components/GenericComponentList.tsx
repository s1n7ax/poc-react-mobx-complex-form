import { observer } from "mobx-react-lite";
import GenericComponent from "./GenericComponent";
import { GenericComponentsModel } from "./models/component-model";

export interface ComponentListProps {
  componentList: GenericComponentsModel[];
}

const GenericComponentList = observer(
  ({ componentList }: ComponentListProps) => {
    console.log("rendering::Components");

    return (
      <>
        {componentList.map((field) => {
          return <GenericComponent key={field.id} data={field} />;
        })}
      </>
    );
  },
);

export default GenericComponentList;
