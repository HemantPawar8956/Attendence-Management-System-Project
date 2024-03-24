import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import { PiCalendarDuotone } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsQrCodeScan } from "react-icons/bs";
import AsideComp from "./AsideComp";
import QRCodes from "./QRCodes";
import { GlobalVariable } from "../contextApi/GlobalContext";

const Manager = () => {
  let { openQR, setOpenQR } = useContext(GlobalVariable);
  let { state, pathname } = useLocation();
  let element = [
    {
      path: "/",
      Name: "DashBoard",
      icon: <FaDashcube />,
    },
    {
      path: "/",
      Name: "Batches",
      icon: <PiCalendarDuotone />,
    },
    {
      path: "/",
      Name: "Certificates",
      icon: <PiCertificateDuotone />,
    },
    {
      path: "/home/QRCode",
      Name: "Open QRCode",
      icon: <BsQrCodeScan />,
    },
    {
      path: "/",
      Name: "Attendence",
      icon: <SiGoogleclassroom />,
    },
  ];
  return (
    <main className="w-[100%] h-[100%] flex flex-wrap">
      <section className="w-[100%] h-[100%] tracker p-3 bg-slate-200 gap-3 flex flex-wrap">
        <AsideComp data={{ element, state, pathname, setOpenQR, openQR }} />
        <article className="w-[82%] h-[100%] bg-slate-800 rounded-lg"></article>
        {openQR && <QRCodes data={{ state, setOpenQR, openQR }} />}
      </section>
    </main>
  );
};

export default Manager;
