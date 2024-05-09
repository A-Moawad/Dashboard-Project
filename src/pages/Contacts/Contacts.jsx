import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

import { rows, columns } from "./data";
import { useTheme } from "@mui/material";

function Contacts() {
  const theme = useTheme();

  return (
    <div style={{ marginTop: "70px", width: "100%", height: "100%" }}>
      <Box
        sx={{
          height: 600,
          width: "90%",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            color: "#1e88e5",
            fontWeight: "bold",
            letterSpacing: "-1px",
          }}
        >
          CONTACTS
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          List of Contacts for Future Reference
        </Typography>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </div>
  );
}

export default Contacts;
