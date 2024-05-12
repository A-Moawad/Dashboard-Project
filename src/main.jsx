import React from "react";
import ReactDOM from "react-dom/client";
import MiniDrawer from "./App";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
import Form from "./pages/Form/Form";
import Calendar from "./pages/Calendar/Calendar";
import Faq from "./pages/FAQ/FAQ";
import BarChart from "./pages/BarChart/BarChart";
import PieChart from "./pages/PieChart/PieChart";
import LineChart from "./pages/LineChart/LineChart";
import GeographyChart from "./pages/GeographyChart/GeographyChart";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MiniDrawer />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/invoices" element={<Invoices />}></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/calendar" element={<Calendar />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/bar" element={<BarChart />}></Route>
      <Route path="/pie" element={<PieChart />}></Route>
      <Route path="/line" element={<LineChart />}></Route>
      <Route path="/geography" element={<GeographyChart />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
