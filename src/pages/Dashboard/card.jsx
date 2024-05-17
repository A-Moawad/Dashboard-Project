import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

function Card({ logo, num, subTitle, percentage, data, color }) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        padding: "10px 20px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: { base: "column", lg: "row" },
        justifyContent: "space-between",
        maxWidth: "100%",
        flexGrow: "1",
      }}
    >
      <Stack direction="column">
        {logo}
        <Typography>{num}</Typography>
        <Typography>{subTitle}</Typography>
      </Stack>
      <Stack direction="column" justifyContent="space-between">
        <Box
          height="100px"
          width={"100px"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <ResponsivePie
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: color }}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            enableArcLinkLabels={false}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </Box>
        <Typography align="center">{percentage}</Typography>
      </Stack>
    </Paper>
  );
}

export default Card;
