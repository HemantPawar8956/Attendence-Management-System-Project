import React from "react";
import NavComponent from "./../Nav/NavComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <NavComponent />
      <Outlet/>
    </section>
  );
};

export default Layout;
