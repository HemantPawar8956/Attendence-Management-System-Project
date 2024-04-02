import React from "react";
import NavComponent from "./../Nav/NavComponent";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <section>
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
      <Outlet />
    </section>
  );
};

export default Layout;
