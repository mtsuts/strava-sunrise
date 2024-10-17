import React from "react";
import { useEffect, useContext } from "react";
import { GetActivity } from "../api/api";
import { AppContext } from "./AppContext";
import { Button, Box } from "@mui/material";

interface ActivitiesProps {
  children: React.ReactNode;
}

export default function Activities({ children }: ActivitiesProps) {
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
