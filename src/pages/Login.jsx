import React from "react";
import { IoMdClose } from "react-icons/io";

const Login = () => {
  return (
    <section className="w-[35%] border-2 h-[70%] m-auto">
      <article>
        <IoMdClose className="text-white float-right text-2xl" />
        <h1 className="text-xl w-[100%] text-center">Login</h1>
        <form action="/login" method="post">
          <div className="field">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="field">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="field">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;

