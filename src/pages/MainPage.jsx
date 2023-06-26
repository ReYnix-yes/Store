import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./home/Home";

function MainPage() {
  return (
    <>
      <Navbar/>
      <Home />
    </>
  );
}

export default MainPage;
