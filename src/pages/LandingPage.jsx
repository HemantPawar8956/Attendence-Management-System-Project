import React from "react";
import { Outlet } from "react-router-dom";
import NavComponent from "../Nav/NavComponent";
// import axios from "axios";

const LandingPage = () => {
  let handleChnage = async () => {};
  return (
    <section className="w-[100%] h-[100vh] bg-red-300 ">
      <NavComponent />
      <article className="w-[100%] h-[91vh] flex justify-end items-center flex-wrap">
        <Outlet />
      </article>
    </section>
  );
};

export default LandingPage;
