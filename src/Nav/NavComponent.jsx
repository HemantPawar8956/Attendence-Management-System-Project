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
  ];
  return (
    <section className="w-[9%] h-[50%] bg-slate-800 ">
      <nav className="w-[97%] h-[98%] flex justify-center flex-wrap">
        <div className="w-[90%] h-[100%]  flex justify-evenly  flex-wrap items-center border-2">
          {element.map((ele, index) => {
            return (
              <NavLink
                to={ele.path}
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-5 text-lg  rounded-md text-white bg-violet-500"
                    : "py-2 px-5 text-lg text-white rounded-md"
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
