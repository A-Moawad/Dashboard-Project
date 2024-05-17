import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Bar from "../BarChart/bar";
import Pie from "../PieChart/pie";
import Graph from "../GeographyChart/graph";

function Row3() {
  const theme = useTheme();
  return (
    <Stack
      gap={1.5}
      direction={{ base: "column", md: "row" }}
      flexWrap="wrap"
      mt={1.4}
      
    >
      <Paper
        sx={{
          flexGrow: 1,
          // minWidth: "400px",
          width: { base: "100%", lg: "calc(33% - 16px)" },
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          // minWidth: "400px",
          width: { base: "100vw", lg: "30%" },
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashbord={true} />
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          // minWidth: "400px",
          width: { base: "100wv", lg: "33%" },
        }}
      >
        <Graph isDashbord={true} />
      </Paper>
    </Stack>
  );
}

export default Row3;
