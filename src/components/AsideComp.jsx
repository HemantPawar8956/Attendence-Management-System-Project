import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";

import Image from "../assets/bridge-8291058_640.webp";

const AsideComp = ({
  data: { element, openQR, setOpenQR, setOpenProfile },
}) => {
  console.log(openQR);
  console.log(setOpenQR);
  return (
    <section className="AsideBar w-[17%] h-[100%] p-4 bg-slate-900 flex justify-center flex-wrap rounded-xl">
      <div className="w-[100%] h-[7%] text-white  flex justify-center items-center">
        LOgo
      </div>
      <div
        className="profileImg w-[85%] h-[24%] p-3 flex justify-center flex-wrap rounded-3xl border-2 border-transparent hover:border-slate-400"
        onClick={() => {
          setOpenProfile(true);
        }}
      >
        <img
          src={Image}
          alt="Users Image"
          className="w-[57%] h-[65%] rounded-full"
        />
        <p className="w-[100%] text-center text-lg text-white">email ID</p>
        <h2 className="w-[100%] text-center text-white">User Name</h2>
      </div>
      <h1 className="w-[100%] text-white px-4 pt-2 mb-1 text-lg border-b-2 border-slate-700">
        Menu Bar
      </h1>
      <div className="asideElew-[100%] h-[55%] px-2 flex justify-evenly content-start flex-wrap">
        {element.map((ele, index) => {
          return ele.Name !== "Open QRCode" ? (
            <NavLink
              to={ele.path}
              className={({ isActive }) =>
                isActive
                  ? "w-[100%] hover:border-slate-300 border-2 border-transparent text-slate-200 py-2 px-5 rounded-md flex items-center bg-blue-950"
                  : "w-[100%] hover:border-slate-300 border-2 border-transparent text-slate-200 py-2 px-5 rounded-md flex items-center "
              }
              key={index}
            >
              <span className="mr-3 text-xl">{ele.icon}</span> {ele.Name}
            </NavLink>
          ) : (
            <button
              className="w-[100%] hover:border-white border-2 border-transparent text-slate-200 py-2 px-5 rounded-md flex items-center "
              onClick={() => {
                setOpenQR(true);
              }}
            >
              <span className="mr-3 text-xl">{ele.icon}</span> Open QRCode
            </button>
          );
        })}
      </div>
      <NavLink
        to="/"
        className="w-[60%] h-[6%] border-2 border-orange-500 flex justify-evenly items-center text-white bg-orange-400 text-lg rounded-lg text hover:bg-orange-600"
      >
        <TbLogout2 className="text-2xl" /> Logout
      </NavLink>
    </section>
  );
};

export default AsideComp;
