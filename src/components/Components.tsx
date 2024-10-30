import React from "react";
import TextField, { TextFieldData } from "./TextField";
import { ComponentType } from "@/lib/store/formStore";
import { Box } from "@mui/material";

export type ComponentsData = TextFieldData;

export interface ComponentsProps {
  fields: ComponentsData[];
}

const Components = ({ fields }: ComponentsProps) => {
  console.log("rendering::Components");

  return (
    <Box
      sx={{
        width: "70%",
        display: "grid",
        gridTemplate: "'1fr 1fr'",
        gridAutoFlow: "row",
        gap: "1rem",
      }}
    >
      {fields.map((field) => {
        if (field.type === ComponentType.TextField) {
          return <TextField key={field.id} textFieldData={field} />;
        }
      })}
    </Box>
  );
};
export default Components;
