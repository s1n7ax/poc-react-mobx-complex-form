import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import GenericComponentList from "../GenericComponentList";

export interface StepperBodyProps {
  data: GroupComponentState;
}

export default function StepperBody({ data }: StepperBodyProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "'1fr 1fr'",
        gridAutoFlow: "row",
        gap: "1rem",
      }}
    >
      <GenericComponentList data={data.children[0] as GroupComponentState} />
    </div>
  );
}
