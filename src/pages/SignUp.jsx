import React, { useContext, useState } from "react";
import AxiosInstance from "./../AxiosInstance/AMSAxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
    loading: false,
    role: "student",
  });

  let { username, password, loading, role } = credentials;
  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await AxiosInstance.post(`Teaching-Staff`, credentials);
      data.id != undefined
        ? toast("Signup Succesfully")
        : toast("User allready Exits");

      setCredentials({
        username: "",
        password: "",
        loading: false,
        role: "",
      });
    } catch (error) {
      console.log(error);
      toast("Error");
    }
    navigate("/");
  };
  console.log(credentials);
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
        <h1 className="text-xl w-[100%] text-center">SignUp</h1>
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
            {username != "" && password != "" && role != "" ? (
              <button type="submit" className="border-2">
                Signup
              </button>
            ) : (
              <button type="submit" className="border-2" disabled>
                Loading...
              </button>
            )}
          </div>
        </form>
      </article>
    </section>
  );
};

export default SignUp;
