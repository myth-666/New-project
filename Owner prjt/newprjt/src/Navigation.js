import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Details from "./Details";

export default function Navigation() {
  return (
    <>
      <HashRouter>
        <Routes>
          
        <Route element={<Admin />} path="/"></Route>
        <Route element={<Details />} path="/Details"></Route>
   
        </Routes>
      </HashRouter>
    </>
  );
}