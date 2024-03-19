import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalVariable } from "../contextApi/GlobalContext";
import { useNavigate } from "react-router-dom";

const Login = (payload) => {
  let navigate = useNavigate();
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
    role: "Trainer",
  });

  let { username, password, isLoggedIn, role } = credentials;
  let { userLogin, loginType, loginTypes, setLoginType ,staffsLogin} =
    useContext(GlobalVariable);
    let [staffLoginType,setstaffLoginType]=useState(loginTypes)
  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, isLoggedIn: true, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let valid = userLogin(credentials);
      console.log(valid);
      valid == undefined
        ? toast("Wrong Login/ Password")
        : toast("Succesfully login"),
        navigate(`/home/${loginType}`);

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
          {staffLoginType.map((ele, index) => {
            return (
              <button
                className="text-lg px-3 py-1 border-2"
                key={index + 1}
                onClick={() => {
                  setLoginType(ele.value);
                  setCredentials({ ...credentials, role: ele.value });
                  ele.label == "Staffs" &&
                    (setLoginType("Trackers"),setstaffLoginType(staffsLogin));
                }}
              >
                {ele.label}
              </button>
            );
          })}
        </div>

        <h1 className="text-xl w-[100%] text-center">{loginType} Login</h1>
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
          <div className="field">
            <button className="border-2">Forgot Password</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
