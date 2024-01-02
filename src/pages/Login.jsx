import React, { useContext, useState } from "react";
import AxiosInstance from "./../AxiosInstance/AMSAxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalVariable } from "../contextApi/GlobalContext";

const Login = (payload) => {
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
    role: "",
  });

  let { username, password, isLoggedIn, role } = credentials;
  let { Authentication } = useContext(GlobalVariable);
  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, isLoggedIn: true, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login");
    try {
      let { data } = await AxiosInstance.get(`/${role}`);
      let valid = Authentication(data, credentials);
      console.log(valid);
      valid == undefined
        ? toast("Wrong Login/ Password")
        : toast("Succesfully login");
  

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
        <h1 className="text-xl w-[100%] text-center">Login</h1>
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
