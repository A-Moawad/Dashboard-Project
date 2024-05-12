import { Box } from "@mui/material";
import Pie from "./pie";
import Header from "../../components/Header";

const PieChart = () => {
  return (
    <Box sx={{width: "100%"}}>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Pie />
    </Box>
  );
};

export default PieChart;
