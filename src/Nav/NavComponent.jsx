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
    <section className="w-[100%] h-[9vh]  flex justify-center">
      <nav className="w-[97%] h-[95%] flex justify-between">
        <div className="w-[15%] h-[110%] mt-1" id="logoBlock"></div>
        <div className="w-[22%] h-[100%] px-2 flex justify-between items-center pt-5">
          {element.map((ele, ind) => {
            return (
              <NavLink key={ind+1}
                to={ele.path}
                className={({ isActive }) =>
                  isActive ? "py-1 px-5 text-lg rounded-md bg-orange-400 text-white" : "py-1 px-5 text-lg rounded-md "
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
