import Header from "../../components/Header";
import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Row1 from "./row1";
import Row2 from "./row2";
import Row3 from "./row3";
function Dashboard() {
  return (
    <Box
      sx={{
        px: "30px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      mt={10}
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Dashboard" subTitle="Welcome to your dashboard" />
        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Box style={{ flex: 1 }}>
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
    </Box>
  );
}

export default Dashboard;
