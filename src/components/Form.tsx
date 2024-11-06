import { GroupComponentState } from "@/lib/store/GroupComponentStore";
import { observer } from "mobx-react-lite";
import GenericComponentList from "./GenericComponentList";
import { Button } from "@mui/material";

export interface FormProps {
  data: GroupComponentState;
}

const Form = observer(({ data }: FormProps) => {
  console.log("rendering::Form");

  return (
    <form className="p-5 border-2 border-black m-2">
      <GenericComponentList data={data} />
      <Button
        variant="outlined"
        disabled={data.hasError}
        sx={{
          m: "2rem",
        }}
      >
        Submit
      </Button>
    </form>
  );
});

export default Form;
