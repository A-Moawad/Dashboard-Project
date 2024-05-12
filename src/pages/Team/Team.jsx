import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

import { rows } from "./data";
import { useTheme } from "@mui/material";

import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

export default function DataGridDemo() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "firstName",
      headerName: "First name",
      align: "center",
      editable: true,
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      align: "center",
      headerAlign: "center",
      flex: 1,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              borderRadius: "3px",
              border: "1px solid #eee",
              color: " #fff",
              fontWeight: "bold",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : access === "User"
                  ? theme.palette.success.light
                  : "",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access === "Manager" && <SecurityOutlined fontSize="small" />}
            {access === "User" && <LockOpenOutlined fontSize="small" />}

            <Typography fontSize="15px">{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{width: "100%", height: "100%" }}>
      <Box
        sx={{
          height: 600,
          width: "90%",
          mx: "auto",
        }}
      >
        <Header title="TEAM" subTitle="Managing the Team Members"/>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </div>
  );
}
