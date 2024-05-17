import { Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import Card from "./card";
import { data1, data2, data3, data4 } from "./data";
function Row1() {
  return (
    <Stack
      gap={2}
      direction={{ base: "column", lg: "row" }}
      justifyContent={{ lg: "space-between" }}
    >
      <Card
        logo={<MailIcon />}
        num="12,361"
        subTitle="Email Sent"
        percentage="+5%"
        data={data1}
        color="nivo"
      />
      <Card
        logo={<PersonAddIcon />}
        num="32,441"
        subTitle="Email Sent"
        percentage="+14%"
        data={data2}
        color="paired"
      />
      <Card
        logo={<TrafficIcon />}
        num="431,225"
        subTitle="Email Sent"
        percentage="+5%"
        data={data3}
        color="dark2"
      />
      <Card
        logo={<PointOfSaleOutlinedIcon />}
        num="1,325,134"
        subTitle="Email Sent"
        percentage="+21%"
        data={data4}
        color="paired"
      />
    </Stack>
  );
}

export default Row1;
