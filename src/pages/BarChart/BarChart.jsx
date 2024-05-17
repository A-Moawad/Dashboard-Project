import { Box } from "@mui/material";
import Bar from "./bar";
import Header from "../../components/Header";

const BarChart = () => {
  return (
    <Box px={3} mt={10}>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;
