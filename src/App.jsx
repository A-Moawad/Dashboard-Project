import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import './App.css';

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { getDesignTokens } from "./Theme";
import { Outlet } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = React.useState(localStorage.getItem("mode")|| 'light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      </Box>
      <Outlet/>
    </ThemeProvider>
  );
}
