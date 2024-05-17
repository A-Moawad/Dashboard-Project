import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

import { rows, columns } from "./data";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

function Contacts() {
  const theme = useTheme();

  return (
    <Box style={{ width: "100%", height: "100%" }} mt={10}>
      <Box
        sx={{
          height: 600,
          width: "90%",
          mx: "auto",
        }}
      >
        <Header
          title="CONTACTS"
          subTitle="List of Contacts for Future Reference"
        />

        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

export default Contacts;
