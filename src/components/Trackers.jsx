import React from "react";
// import QRCodeScanner from "./QRCodeScanner";
import QRCodes from "./QRCodes";
import { useLocation } from "react-router-dom";
import AsideComp from "./AsideComp";

const Trackers = () => {
  let { state } = useLocation();
  console.log(state);
  return (
    <section className="w-[100%] h-[100%] tracker p-3 bg-slate-200 gap-3 flex flex-wrap">
      <AsideComp data={state} />
      <article className="w-[82%] h-[100%] bg-slate-800 rounded-lg"></article>
    </section>
  );
};

export default Trackers;
