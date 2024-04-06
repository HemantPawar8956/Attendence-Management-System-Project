import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalVariable } from "../contextApi/GlobalContext";
import { useNavigate } from "react-router-dom";
import { CgRename } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { PiPasswordThin } from "react-icons/pi";

const SignUp = (payload) => {
  let navigate = useNavigate();
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
    role: "Trainer",
  });

  let { username, password, isLoggedIn, role } = credentials;
  let { userLogin, loginType, loginTypes, setLoginType, staffsLogin } =
    useContext(GlobalVariable);
  let [staffLoginType, setstaffLoginType] = useState(loginTypes);

  //set login credentials
  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, isLoggedIn: true, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let valid = userLogin(credentials);
      valid == undefined
        ? toast("Wrong Login/ Password")
        : (toast("Succesfully login"),
          setTimeout(() => {
            navigate(`/home/${loginType}`, { state: valid });
          }, 1500));

      setCredentials({
        username: "",
        password: "",
        isLoggedIn: false,
        role: "Trainer",
      });
    } catch (error) {
      toast("Error");
    }
  };
  console.log(credentials);
  return (
    <section className="w-[80%]  h-[85%] m-auto relative">
      <article className=" rounded-xl  bg-slate-900 flex flex-col justify-evenly border-[hsl(0,0%,1%)] h-[100%] shadow-[0px_0px_10px_bg-slate-400] shadow-slate-400">
        {loginType != "Trainer" && loginType != "Students" && (
          <IoChevronBackCircleSharp
            className="ms-2 text-4xl absolute top-2 text-blue-300"
            onClick={() => {
              setstaffLoginType(loginTypes);
              setLoginType("Trainer");
            }}
          />
        )}
        <div className="w-[100%] flex justify-evenly mt-[30px]">
          {staffLoginType.map((ele, index) => {
            return (
              <button
                className="font-medium  text-blue-400 rounded-[8px] border-[1px]  border-[white] px-[1.2em] py-[0.6em] text-[1em] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s] hover:border-[#646cff]  outline-[4px_auto_-webkit-focus-ring-color]"
                key={index + 1}
                onClick={() => {
                  setLoginType(ele.value);
                  setCredentials({ ...credentials, role: ele.value });
                  ele.label == "Staffs" &&
                    (setLoginType("Trackers"), setstaffLoginType(staffsLogin));
                }}
              >
                {ele.label}
              </button>
            );
          })}
        </div>

        <h1 className="text-xl w-[100%] text-center">Signup as {loginType} </h1>
        <form onSubmit={handleSubmit} className=" h-[60%]">
          <div className="w-full h-[35px] flex justify-center mt-[20px] gap-[10px] ">
            <FaUserCircle className="text-[26px] text-white" />
            <input
              type="text"
              placeholder="UserName"
              value={username}
              name="username"
              onChange={handlechange}
              className="w-[30%] border-none outline-none mix-blend-luminosity bg-transparent"
            />
          </div>
          <div className="border-b-2 border-white w-1/3 ml-[33%]"></div>

          <div className="w-full h-[35px] flex justify-center mt-[20px] gap-[10px] ">
            <PiPasswordThin className="text-[26px] text-white" />
            <input
              type="text"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handlechange}
              className="w-[30%] border-none outline-none mix-blend-luminosity bg-transparent"
            />
          </div>
          <div className="border-b-2 border-white w-1/3 ml-[33%]"></div>

          <div className="field">
            {username != "" && password != "" && role != "" ? (
              <button
                type="submit"
                className="font-medium  [text-decoration:inherit] rounded-[8px] border-[1px]  border-[transparent] px-[1.2em] py-[0.6em] text-[1em] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s] hover:border-[#646cff] text-[#535bf2] outline-[4px_auto_-webkit-focus-ring-color] mt-[20px]"
              >
                SignUp
              </button>
            ) : (
              <button
                type="submit"
                className="font-medium  [text-decoration:inherit] rounded-[8px] border-[1px]  border-[white] px-[1.2em] py-[0.6em] text-[1em] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s] hover:border-[#646cff] text-[#535bf2] outline-[4px_auto_-webkit-focus-ring-color] mt-[20px]"
                disabled
              >
                Loading...
              </button>
            )}
          </div>
          <div className="field">
            <button className=" mt-4 text-white border-b">
              Forgot Password
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SignUp;
