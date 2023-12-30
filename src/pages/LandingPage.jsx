import React from "react";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="w-screen h-[91vh] bg-red-300">
      <Outlet />
    </section>
  );
};

export default LandingPage;
