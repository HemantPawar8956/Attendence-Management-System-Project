import React from "react";
import { NavLink } from "react-router-dom";

const NavComponent = () => {
  let element = [
    {
      path: "/",
      Name: "Login",
    },
    {
      path: "/signup",
      Name: "SignUp",
    },
    {
      path: "/contactUs",
      Name: "ContactUs",
    },
  ];
  return (
    <section className="w-[12%] h-[40%] ">
      <nav className="w-[100%] h-[98%] flex justify-end flex-wrap">
        <div className="w-[80%] h-[100%]  flex justify-evenly  flex-wrap items-center Navbtn">
          {element.map((ele, index) => {
            return (
              <NavLink
                to={ele.path}
                className={({ isActive }) =>
                  isActive
                    ? "py-2 w-[100%] text-lg  rounded-md text-white bg-violet-500 "
                    : "py-2 w-[100%] text-lg text-white rounded-md border-2 border-slate-600 hover:border-slate-400"
                }
                key={index + 1}
              >
                {ele.Name}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </section>
  );
};

export default NavComponent;
