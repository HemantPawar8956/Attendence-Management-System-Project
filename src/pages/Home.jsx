import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <article className="w-[100%] h-[100vh] overflow-hidden">
      <Outlet />
    </article>
  );
};

export default Home;
