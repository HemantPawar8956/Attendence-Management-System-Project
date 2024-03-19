import React from "react";
import AsideComp from "./../components/AsideComp";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-screen h-[91vh] bg-red-800 flex">
      <AsideComp />
      <Outlet />
    </section>
  );
};

export default Home;
