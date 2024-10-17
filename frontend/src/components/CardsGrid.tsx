import React from "react";
import { Box } from "@mui/material";
import Card from "./Card";

interface CardsGrid {
  activities: [];
}

export default function CardsGrid({ activities }: CardsGrid) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { sm: "repeat(4, 1fr)", xs: "repeat(1, 1fr)" },
        py: 6,
      }}
    >
      {activities.map((activity, index) => {
        return <div> test</div>;
      })}
    </Box>
  );
}
