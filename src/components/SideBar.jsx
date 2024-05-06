import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";

import { grey } from "@mui/material/colors";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const side1 = [
  {
    text: "Dashbord",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    text: "Manage Team",
    icon: <PeopleOutlineOutlinedIcon />,
    path: "/team",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoiced Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const side2 = [
  {
    text: "Profile Form",
    icon: <Person2OutlinedIcon />,
    path: "/form",
  },
  {
    text: "Calendar",
    icon: <CalendarMonthOutlinedIcon />,
    path: "/calendar",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];
const side3 = [
  {
    text: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    path: "/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "/line",
  },
  {
    text: "Map Chart",
    icon: <MapOutlinedIcon />,
    path: "/geography",
  },
];

const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Avatar
          sx={{
            mx: "auto",
            my: 2,
            width: open ? 80 : 50,
            height: open ? 80 : 50,
            transition: "0.2s ",
            border: "2px solid gray",
            "@media (max-width: 768px)": {
              width: open ? 60 : 30,
              height: open ? 60 : 30,
            },
          }}
          alt="Travis Howard"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKBaNdVgreE8C23jrdOFKAol2htMQwIprzphGd0i3xQ&s"
        />
        <Typography
          align="center"
          sx={{
            fontSize: open ? 16 : 0,
            fontWeight: "bold",
            color: "gray",
            transition: "0.2s ",

            "@media (max-width: 768px)": {
              fontSize: open ? "12px" : 0,
            },
          }}
        >
          john
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: open ? "14px" : 0,
            fontWeight: "bold",
            color: theme.palette.info.main,
            transition: "0.2s ",
            "@media (max-width: 768px)": {
              fontSize: open ? "12px" : 0,
            },
          }}
        >
          Admin
        </Typography>
        <Divider />
        <List>
          {side1.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: "block",
                margin: "auto",
                bgcolor:
                  location.pathname === item.path &&
                  theme.palette.mode === "dark"
                    ? grey[800]
                    : location.pathname === item.path &&
                      theme.palette.mode === "light"
                    ? grey[200]
                    : null,
              }}
              onClick={() => {
                navigate(item.path);
                // handleDrawerClose();
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {side2.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate(item.path);
                // handleDrawerClose();
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {side3.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate(item.path);
                // handleDrawerClose();
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
