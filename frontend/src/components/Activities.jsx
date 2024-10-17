import { useEffect, useContext } from "react";
import { GetActivity } from "../api/api";
import { AppContext } from "./AppContext";
import { Button, Box } from "@mui/material";

export default function Activities(props) {
  const { setActivities, activities } = useContext(AppContext);

  return (
    <>
      <Button
        onClick={() => {
          GetActivity().then((data) => setActivities(data));
        }}
      >
        Click me
      </Button>
      <Box>test</Box>
    </>
  );
}
