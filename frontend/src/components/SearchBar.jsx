import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useContext } from "react";
import { AppContext } from "./AppContext";

export default function SearchBar() {
  const { setActivityInput, activityInput } = useContext(AppContext);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: { sm: "20%", xs: "100%" },
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      width: "auto",
    },
    [theme.breakpoints.up("xs")]: {
      marginLeft: 0,
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    borderRadius: 4,
    borderBottom: 2,
    padding: 4,
    borderColor: "#ccc",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: { sm: "20%", xs: "100%" },
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
      },
      [theme.breakpoints.up("xs")]: {
        width: "20ch",
      },
    },
  }));

  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      const value = inputRef.current.value.toLowerCase()
      setActivityInput(value);
      inputRef.current.focus();
    }
  };
  

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick(); // Trigger handleClick on Enter key press
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        inputRef={inputRef}
        placeholder="Search activity..."
        inputProps={{ "aria-label": "search" }}
        onKeyDown={handleKeyDown}
      />
    </Search>
  );
}
