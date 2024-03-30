import React, { useContext, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import { PiCalendarDuotone } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsQrCodeScan } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import AsideComp from "./AsideComp";
import QRCodes from "./QRCodes";
import { GlobalVariable } from "../contextApi/GlobalContext";
import Profile from "./SideBarComponents/Profile";
import TrainerTimings from "./TrainerTimings";

const Trackers = () => {
  let {
    openQR,
    setOpenQR,
    openProfile,
    setOpenProfile,
    trainerTimings,
    setTrainerTimings,
    batchType,
    setBatchType,
  } = useContext(GlobalVariable);
  let { state, pathname } = useLocation();
  let element = [
    {
      path: "/home/Trackers/Dashboard",
      Name: "DashBoard",
      icon: <FaDashcube />,
    },
    {
      path: "/home/Trackers/Batches",
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
      path: "/home/Trackers/Attendence",
      Name: "Attendence",
      icon: <SiGoogleclassroom />,
    },
  ];
  let [batchPanel, setBatchPanel] = useState(false);
  let handleBatchPanel = () => {
    setBatchType(false);
  };
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
      {batchType && (
        <article
          className="w-[100%] h-[100vh] flex justify-center items-center fixed Qrpage"
          onClick={handleBatchPanel}
        >
          <article
            className="w-[30%] h-[18%] border-2 bg-slate-950 rounded-md flex justify-around content-between flex-wrap p-3  relative"
            onClick={(e) => {
              e.stopPropagation();
              setBatchType(true);
            }}
          >
            <main className="w-[100%] h-[35%] border-2 text-white flex justify-end px-3 text-2xl items-center rounded" onClick={()=>{setBatchPanel(!batchPanel)}}>
              <FaAngleDown class/>
            </main>
            {batchPanel && (
              <div className="w-[90%] h-[30%] bg-slate-700 text-white absolute top-12 px-3 flex items-center text-lg rounded-md shadow-slate-400 shadow-inner">
                Regular
              </div>
            )}
            <button className="h-[40%] w-[22%] text-white font-bold bg-green-700 hover:bg-green-800 rounded">
              Submit
            </button>
            <button className="h-[40%] w-[22%] text-white font-bold bg-red-600 hover:bg-red-800 rounded">
              Cancel
            </button>
          </article>
        </article>
      )}
      {openProfile && <Profile data={{ state, setOpenProfile }} />}
      {trainerTimings && <TrainerTimings data={{ state, setTrainerTimings }} />}
      {openQR && <QRCodes data={{ state, setOpenQR, openQR }} />}
    </main>
  );
};

export default Trackers;
