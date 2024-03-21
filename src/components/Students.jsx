import React, { useContext } from "react";
import CreateUser from "./CreateUser";
import { GlobalVariable } from "../contextApi/GlobalContext";
import { useLocation } from "react-router-dom";
import AsideComp from "./AsideComp";

const Students = () => {
  let { state } = useLocation();
  console.log(state);
  let { loginType, staffsLogin, loginTypes, setLoginType, newUserValid } =
    useContext(GlobalVariable);
  return (
    <section className="w-[100%] h-[100%] tracker p-3 bg-slate-200 gap-3 flex flex-wrap">
      <AsideComp />
      <article className="w-[82%] h-[100%] bg-slate-800 rounded-lg"></article>
    </section>
  );
};

export default Students;
