import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Details from "./Details";
import Payment from "./Payment";
import Concession from "./Concession";
import App from "./App";

export default function Navigation() {
  return (
    <>
      <HashRouter>
        <Routes>
          
        <Route element={<App />} path="/"></Route>
        <Route element={<Admin />} path="/Admin"></Route>
        <Route element={<Details />} path="/Details"></Route>
        <Route element={<Payment />} path="/Payment"></Route>
        <Route element={<Concession />} path="/Concession"></Route>
   
        </Routes>
      </HashRouter>
    </>
  );
}