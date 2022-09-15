import React, { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import "../App.css";
import { Main } from "../styles/StaticHomeElements";
import { useGlobalContext } from "../context";
const Home = () => {
  const {isOpen} = useGlobalContext()
  return (
    <Main isOpen={isOpen}>
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </Main>
  );
};

export default Home;
