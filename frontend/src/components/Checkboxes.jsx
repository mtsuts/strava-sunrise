import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import theme from "../utils/themes";

export default function Checkboxes() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox sx={{ color: theme.palette.background.green, cursor: 'pointer' }} />}
        label="Add"
      />
    </FormGroup>
  );
}
