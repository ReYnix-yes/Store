import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Store from "./pages/store/Store";
import Home from "./pages/home/Home";
import MainPage from "./pages/MainPage";
import Career from "./pages/career/Сareer";
import Cooperation from "./pages/cooperation/Сooperation";
import AboutComp from "./pages/aboutComp/AboutComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="Store" element={<Store />} />
      <Route path="Career" element={<Career/>}/>
      <Route path="Cooperation" element={<Cooperation/>}/>
      <Route path="About" element={<AboutComp/>} />
    </Routes>
  );
}

export default App;
