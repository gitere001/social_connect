import React from "react";
import { appRoutes } from "./appRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider, useSelector } from "react-redux";

export default function App() {
  return (
    // <Provider>
      <BrowserRouter>
        <Routes>
          {appRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}
