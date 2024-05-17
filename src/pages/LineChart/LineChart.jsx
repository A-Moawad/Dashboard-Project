import { Box } from "@mui/material";
import Header from "../../components/Header";
import Line from "./line";

function LineChart() {
  return (
    <Box sx={{height: "100%", width: "100%", px: "30px"}} mt={10}>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Line />
    </Box>
  );
}

export default LineChart;
