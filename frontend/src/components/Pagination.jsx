import * as React from "react";
import { useState, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AppContext } from "./AppContext";

export default function PaginationRounded(props) {
  const { setPage, page } = useContext(AppContext);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.length}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
