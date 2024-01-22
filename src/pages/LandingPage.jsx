import React from "react";
import { Outlet } from "react-router-dom";
import AxiosInstance from "../AxiosInstance/AMSAxiosInstance";
import bgImg from "../assets/images/21421.jpg"
// import axios from "axios";

const LandingPage = () => {
  let handleChnage = async () => {
    let { data } = await AxiosInstance.get("/1");
    console.log(data);
    let payload = { id: 10, course8: "Math", course9: "Physics" };
    await AxiosInstance.post("/", payload);
  };
  return (
    <section className="w-27% h-80vh">
      <Outlet />
      {/* <button onClick={handleChnage}>Click to add</button> */}
    </section>
  );
};

export default LandingPage;
