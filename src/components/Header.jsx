import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subTitle, isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 2: 4}>
      <Typography
        sx={{
          fontSize: "32px",
          color: "#1e88e5",
          fontWeight: "bold",
          letterSpacing: "-1px",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
