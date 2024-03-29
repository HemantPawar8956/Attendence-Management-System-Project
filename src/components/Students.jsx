import React, { useContext } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import { PiCalendarDuotone } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsQrCodeScan } from "react-icons/bs";
import AsideComp from "./AsideComp";
import QRCodes from "./QRCodes";
import { GlobalVariable } from "../contextApi/GlobalContext";
import Profile from "./SideBarComponents/Profile";

const Students = () => {
  let { openQR, setOpenQR, openProfile, setOpenProfile } =
    useContext(GlobalVariable);
  let { state, pathname } = useLocation();
  let element = [
    {
      path: "/home/students/Dashboard",
      Name: "DashBoard",
      icon: <FaDashcube />,
    },
    {
      path: "/home/students/Batches",
      Name: "Batches",
      icon: <PiCalendarDuotone />,
    },
    {
      path: "/home/students/certificates",
      Name: "Certificates",
      icon: <PiCertificateDuotone />,
    },
    {
      path: "/home/QRCode",
      Name: "Open QRCode",
      icon: <BsQrCodeScan />,
    },
    {
      path: "/home/students/Attendence",
      Name: "Attendence",
      icon: <SiGoogleclassroom />,
    },
  ];
  return (
    <main className="w-[100%] h-[100%] flex flex-wrap">
      <section className="w-[100%] h-[100%] tracker p-3 bg-slate-200 gap-3 flex flex-wrap">
        <AsideComp
          data={{
            element,
            state,
            pathname,
            setOpenQR,
            openQR,
            openProfile,
            setOpenProfile,
          }}
        />
        <article className=" childrens w-[82%] h-[100%] bg-slate-700 rounded-lg overflow-hidden">
          <Outlet />
        </article>
      </section>
      {openProfile && <Profile data={{ state, setOpenProfile }} />}
      {openQR && <QRCodes data={{ state, setOpenQR, openQR }} />}
    </main>
  );
};

export default Students;
