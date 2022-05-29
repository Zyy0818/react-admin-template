import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { Text } from "@mantine/core";
import ExampleTable from "./pages/ExampleTable";
import MyForm from "./pages/MyForm";
import Donate from "./pages/Donate";
import Tree from "./pages/Tree";
import Menu from "./pages/Menu";
import DashBoard from "./pages/DashBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Text size="xl">name: Super Admin</Text>} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="example">
            <Route path="table" element={<ExampleTable />} />
            <Route path="tree" element={<Tree />} />
          </Route>
          <Route path="form" element={<MyForm />} />
          <Route path="nested">
            <Route path="menu1">
              <Route path="menu1-1" element={<Menu />} />
              <Route path="menu1-2">
                <Route path="menu1-2-1" element={<Menu />} />
                <Route path="menu1-2-2" element={<Menu />} />
              </Route>
              <Route path="menu1-3" element={<Menu />} />
            </Route>
            <Route path="menu2" element={<Menu />} />
          </Route>
          <Route path="donate" element={<Donate />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<p>No Page</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
