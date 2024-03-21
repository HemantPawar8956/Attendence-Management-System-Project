import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { FaDashcube } from "react-icons/fa";
import { PiCalendarDuotone } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

const AsideComp = ({ data }) => {
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
      path: "/",
      Name: "Attendence",
      icon: <SiGoogleclassroom />,
    },
  ];
  console.log(data);
  return (
    <section className="AsideBar w-[17%] h-[100%] p-4 bg-slate-800 flex justify-center flex-wrap rounded-xl">
      <div className="w-[100%] h-[7%] text-white border-2 flex justify-center items-center">
        LOgo
      </div>
      <div className="w-[100%] h-[25%] border-2">
        <img src={`${data.Image}`} alt="Users Image" />
      </div>
      <div className="w-[100%] h-[60%] px-2 flex justify-evenly content-start flex-wrap">
        {element.map((ele, index) => {
          return (
            <NavLink
              to={ele.path}
              className={({ isActive }) =>
                isActive
                  ? "w-[100%] hover:border-white border-2 border-slate-400 text-white py-2 px-5 text-lg rounded-md flex items-center bg-violet-500"
                  : "w-[100%] hover:border-white border-2 border-slate-400 text-white py-2 px-5 text-lg rounded-md flex items-center "
              }
              key={index + 1}
            >
              <span className="mr-3 text-xl">{ele.icon}</span> {ele.Name}
            </NavLink>
          );
        })}
      </div>
      <NavLink className="w-[60%] h-[6%] border-2 flex justify-evenly items-center text-white bg-orange-400 text-lg rounded-lg text hover:bg-orange-600">
        <TbLogout2 className="text-2xl" /> Logout
      </NavLink>
    </section>
  );
};

export default AsideComp;
