import React, { useContext, useState } from "react";
import AxiosInstance from "./../AxiosInstance/AMSAxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { GlobalVariable } from "../contextApi/GlobalContext";

const SignUp = () => {
  let navigate = useNavigate();
  let { loginType,staffsLogin, loginTypes, setLoginType, newUserValid } =
    useContext(GlobalVariable);
    let [signUpType,setSignUpType]=useState(loginTypes)
  let [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    isLoggedIn: false,
    role: loginType,
  });

  let { username, password, isLoggedIn, role, fullName, email } = credentials;

  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, isLoggedIn: true, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let valid = newUserValid(credentials);
      console.log(valid);
      let createUser = valid == undefined ? true : false;

      if (createUser) {
        toast("Signup Succesfully");
        let { data } = await AxiosInstance.post(`/${loginType}`, credentials);
        console.log(data);

        setTimeout(() => {
          navigate(`/`);
        }, 2000);
      } else {
        toast("User Allready Exists");
      }
      setCredentials({
        fullName: "",
        email: "",
        username: "",
        password: "",
        isLoggedIn: false,
        role: loginType,
      });
    } catch (error) {
      toast("Error");
    }
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
        <div className="w-[100%] flex justify-evenly">
          {signUpType.map((ele, index) => {
            return (
              <button
                className="text-lg px-3 py-1 border-2"
                key={index + 1}
                onClick={() => {
                  setLoginType(ele.value);
                  setCredentials({ ...credentials, role: ele.label });
                  ele.label == "Staffs" &&
                    (setLoginType("Trackers"), setSignUpType(staffsLogin));
                }}
              >
                {ele.label}
              </button>
            );
          })}
        </div>
        <h1 className="text-xl w-[100%] text-center">Signup as {loginType}</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName" className="label">
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={handlechange}
              required
            />
          </div>
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
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email" className="label">
              Email Id :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handlechange}
              required
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
              required
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
