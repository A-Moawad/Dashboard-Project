import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subTitle}) => {
  const theme = useTheme();
  return (
    <Box mb={2} mt={10}>
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
