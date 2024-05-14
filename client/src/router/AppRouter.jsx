import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { menuRoutes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<route.Element />}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default AppRouter;