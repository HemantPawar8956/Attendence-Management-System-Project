import React from "react";
import { Outlet } from "react-router-dom";
import AxiosInstance from "../AxiosInstance/AMSAxiosInstance";
// import axios from "axios";

const LandingPage = () => {
  let handleChnage = async () => {};
  return (
    <section className="w-screen h-[91vh] bg-red-300 flex justify-end items-center">
      <Outlet />
    </section>
  );
};

export default LandingPage;
