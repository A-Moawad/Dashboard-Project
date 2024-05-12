import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

import { rows, columns } from "./data";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

function Invoices() {
  const theme = useTheme();

  return (
    <div style={{width: "100%", height: "100%" }}>
      <Box
        sx={{
          height: 600,
          width: "90%",
          mx: "auto",
        }}
      >
        <Header
          title="INVOICES"
          subTitle="List of Invoice Balances"
        />
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default Invoices;
