import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import LandingPage from "./../pages/LandingPage";
import Login from "./../pages/Login";
import SignUp from "./../pages/SignUp";
import Register from "./../pages/Register";
import Loader from "./../components/Loader";
import Students from "./../components/Students";
import Trainers from "./../components/Trainers";
import Trackers from "./../components/Trackers";
import OfficeStaffs from "../components/OfficeStaffs";
import HR from "./../components/HR";
import Manager from "./../components/Manager";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        children: [
          {
            path: "/",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "/home/students",
            element: <Students />,
          },
          {
            path: "/home/trainer",
            element: <Trainers />,
          },
          {
            path: "/home/OfficeStaffs",
            element: <OfficeStaffs />,
          },
          {
            path: "/home/Trackers",
            element: <Trackers />,
          },
          {
            path: "/home/HRs",
            element: <HR />,
          },
          {
            path: "/home/Managers",
            element: <Manager />,
          },
        ],
      },
      {
        path: "/loader",
        element: <Loader />,
      },
    ],
  },
]);
