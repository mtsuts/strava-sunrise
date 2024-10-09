import { Box } from "@mui/material";
import Card from "./Card";

export default function CardsGrid(props) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(4, 1fr)",
        // px: 32,
        py: 6,
      }}
    >
      {props.activities.map((activity, index) => {
        return <Card key={index} data={activity} />;
      })}
    </Box>
  );
}
