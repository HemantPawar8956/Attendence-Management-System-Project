import React, { useContext, useState } from "react";
import AxiosInstance from "./../AxiosInstance/AMSAxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalVariable } from "../contextApi/GlobalContext";
import { useNavigate } from "react-router-dom";

const Login = (payload) => {
  let navigate=useNavigate();
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
    role: "",
  });

  let { username, password, isLoggedIn, role } = credentials;
  let { Authentication, loginType, loginTypes, setLoginType } =
    useContext(GlobalVariable);
  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, isLoggedIn: true, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login");
    try {
      let { data } = await AxiosInstance.get(`/students`);
      console.log(data);
      // let valid = Authentication(data, credentials);
      console.log(valid);
      valid == undefined
        ? toast("Wrong Login/ Password")
        : toast("Succesfully login"),navigate("");
       
      setCredentials({
        username: "",
        password: "",
        isLoggedIn: false,
        role: "",
      });
      
    } catch (error) {
      toast("Error");
    }
  };
  return (
    <section className="w-[35%] border-2 h-[70%] m-auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <article className="">
        <div className="w-[100%] flex justify-evenly">
          {loginTypes.map((ele, index) => {
            return (
              <button
                className="text-lg px-3 py-1 border-2"
                key={index + 1}
                onClick={() => {
                  setLoginType(ele.value);
                }}
              >
                {ele.label}
              </button>
            );
          })}
        </div>

        <h1 className="text-xl w-[100%] text-center">{loginType}'s Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handlechange}
            />
          </div>
          <div className="field">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlechange}
            />
          </div>
          <div className="field">
            <button type="submit" className="border-2">
              Login
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
