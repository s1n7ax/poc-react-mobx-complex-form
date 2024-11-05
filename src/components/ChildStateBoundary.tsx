import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { GroupComponentModel } from "./models/component-model";
import { runInAction } from "mobx";

export interface ChildStateBoundaryProps {
  data: GroupComponentModel;
  children: ReactNode;
}

/**
 * Goal of thi component is reflect children state of the current component
 * in the curren. Such as
 * - hasError
 * - isDirty
 */
const ChildStateBoundary = observer(
  ({ data, children }: ChildStateBoundaryProps) => {
    const hasError = data.children.some((c) => c.hasError);
    const isDirty = data.children.some((c) => c.isDirty);

    runInAction(() => {
      data.hasError = hasError;
      data.isDirty = isDirty;
    });

    return <> {children}</>;
  },
);

export default ChildStateBoundary;
