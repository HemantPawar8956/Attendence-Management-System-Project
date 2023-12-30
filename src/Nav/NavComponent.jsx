import React from "react";
import { NavLink } from "react-router-dom";

const NavComponent = () => {
  let element = [
    {
      path: "/login",
      Name: "Login",
    },
    {
      path: "/signup",
      Name: "SignUp",
    },
    {
      path: "/register",
      Name: "Register",
    },
  ];
  return (
    <section className="w-[100%] h-[9vh] bg-slate-600 flex justify-center">
      <nav className="w-[97%] h-[95%] flex justify-between">
        <div className="w-[15%] h-[100%] border-2">LOgo</div>
        <div className="w-[22%] h-[100%] px-2 border-2 flex justify-between items-center">
          {element.map((ele) => {
            return (
              <NavLink
                to={ele.path}
                className={({ isActive }) =>
                  isActive ? "py-2 px-5 text-lg rounded-md bg-violet-500" : "py-2 px-5 text-lg rounded-md"
                }
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
