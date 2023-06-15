import React from "react";
import "./App.css"
import { Link, Route, Routes } from "react-router-dom";
import Store from "./pages/store/Store";
import Home from "./pages/home/Home";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Store" element={<Store/>}/>
    </Routes>
  );
}

export default App;
