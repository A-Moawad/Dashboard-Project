import { Box } from "@mui/material";
import Header from "../../components/Header";
import Graph from "./graph";
function GeographyChart() {
  return (
    <Box sx={{ px: "30px", width: "100%" }} mt={10}>
      <Header title="Geography Chart" subtitle="Geography Chart simple" />
      <Graph />
    </Box>
  );
}

export default GeographyChart;
