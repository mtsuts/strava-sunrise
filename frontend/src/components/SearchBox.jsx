import SearchBar from "./SearchBar";
import { Box } from "@mui/material";

export default function SearchBox() {
  return (
    <Box>
      <Box sx={{ marginBottom: 2, fontWeight: 500, fontSize: 20 }}>
        {" "}
        Find activity
      </Box>
      <Box sx={{ width: "20%" }}>
        <SearchBar />
      </Box>
    </Box>
  );
}
