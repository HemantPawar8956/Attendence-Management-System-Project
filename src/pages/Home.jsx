import React from "react";
import AsideComp from "./../components/AsideComp";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <article className="w-[100%] h-[100vh]">
      <Outlet />
    </article>
  );
};

export default Home;
