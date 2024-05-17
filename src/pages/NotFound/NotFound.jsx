import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      mx="auto"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  );
};

export default NotFound;
