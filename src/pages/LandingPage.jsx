import React from "react";
import { Outlet } from "react-router-dom";
import NavComponent from "../Nav/NavComponent";

const LandingPage = () => {
  return (
    <section className="h-screen  font-[Inter,_system-ui,_Avenir,_Helvetica,_Arial,_sans-serif] leading-normal font-normal [color-scheme:light_dark] text-[rgba(255,_255,_255,_0.87)] bg-slate-950  mx-[auto] my-[0] p-8 text-center flex items-center">
      <NavComponent />
      <article className="w-[100%] h-[91vh] flex justify-end items-center flex-wrap">
        <Outlet />
      </article>
    </section>
  );
};

export default LandingPage;
