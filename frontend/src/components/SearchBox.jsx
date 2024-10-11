import SearchBar from "./SearchBar";
import { Box } from "@mui/material";
import theme from "../utils/themes";
import { Grid2 } from "@mui/material";

export default function SearchBox() {
  return (
    <Box>
      {/* <Grid2 container spacing={2}>
        <Grid2 item xs={4}>
          <Box>First Box</Box>
        </Grid2>
        <Grid2 item xs={4}>
          <Box>Second Box</Box>
        </Grid2>
        <Grid2 item xs={4}>
          <Box>Third Box</Box>
        </Grid2>
      </Grid2> */}
      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 4,
          gap: 4,
          color: theme.palette.text.secondary,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: theme.palette.background.green,
            p: 2,
            border: 1,
            borderColor: theme.palette.primary.main,
            borderRadius: 2,
            maxWidth: "400px",
          }}
        >
          Did you complete an epic ride on a stunning route and think it’s worth
          sharing with the world? Become a contributor to this route hub!
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: theme.palette.background.green,
            p: 2,
            border: 1,
            borderColor: theme.palette.primary.main,
            borderRadius: 2,
            maxWidth: "400px",
          }}
        >
          Choose up to 3 unique routes from your Strava activities and share
          them with fellow cyclists who are always eager to explore more!
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: theme.palette.background.green,
            p: 2,
            border: 1,
            borderColor: theme.palette.primary.main,
            borderRadius: 2,
            maxWidth: "400px",
          }}
        >
          Click 'Add' button on any activity card.
        </Box>
      </Grid2>
      <Box sx={{ width: { xs: "100%", sm: "20%" } }}>
        <SearchBar />
      </Box>
    </Box>
  );
}
