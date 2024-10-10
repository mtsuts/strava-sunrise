import { Box } from "@mui/material";
import Card from "./Card";

export default function CardsGrid(props) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: {sm: "repeat(4, 1fr)", xs: "repeat(1, 1fr)"},
        py: 6,
      }}
    >
      {props.activities.map((activity, index) => {
        return <Card key={index} data={activity} />;
      })}
    </Box>
  );
}
