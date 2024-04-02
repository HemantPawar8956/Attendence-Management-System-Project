import React, { useContext, useState } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
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
import { useRef } from "react";
import { toast } from "react-toastify";

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
  let BatchTypeRef = useRef();
  let navigate = useNavigate();
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

  let showScanner = (e) => {
    e.stopPropagation();
    if (BatchTypeRef.current.innerText != "") {
      toast.success(
        `${BatchTypeRef.current.innerText} Batch Attendence added Succesfully`
      );
      setBatchType(false);
      setTimeout(() => {
        navigate("/home/scanner");
      }, 2000);
    } else {
      toast.error("Please Enter the Batch Type!");
    }
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
            className="w-[30%] h-[22%] border-2 bg-slate-950 rounded-md flex justify-around  flex-wrap px-3 py-2  relative"
            onClick={(e) => {
              e.stopPropagation();
              setBatchType(true);
            }}
          >
            <h1 className="w-[100%] text-white text-lg">
              Batch Attendence Type
            </h1>
            <main
              className="w-[100%] h-[25%] border-2 text-white flex justify-end px-3 text-2xl mb-2 items-center rounded"
              onClick={() => {
                setBatchPanel(!batchPanel);
              }}
            >
              <div
                className="w-[95%] h-[80%] text-lg "
                ref={BatchTypeRef}
              ></div>
              <FaAngleDown />
            </main>
            {batchPanel && (
              <section className="w-[90%] h-[43%] absolute top-20  rounded-md flex flex-wrap content-between bg-slate-900 overflow-hidden">
                <div
                  className="w-[100%] h-[48%] bg-slate-800 text-white px-3 flex items-center text-base "
                  onClick={(e) => {
                    e.stopPropagation();
                    BatchTypeRef.current.innerText = e.target.innerText;
                    setBatchPanel(!batchPanel);
                  }}
                >
                  Regular
                </div>
                <div
                  className="w-[100%] h-[48%] bg-slate-800 text-white  px-3 flex items-center text-base "
                  onClick={(e) => {
                    e.stopPropagation();
                    BatchTypeRef.current.innerText = e.target.innerText;
                    setBatchPanel(!batchPanel);
                  }}
                >
                  Weekely
                </div>
              </section>
            )}
            <button
              className="h-[30%] w-[22%] text-white font-bold bg-green-700 hover:bg-green-800 rounded "
              onClick={showScanner}
            >
              Submit
            </button>
            <button
              className="h-[30%] w-[22%] text-white font-bold bg-red-600 hover:bg-red-800 rounded"
              onClick={(e) => {
                e.stopPropagation();
                setBatchType(false);
              }}
            >
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
