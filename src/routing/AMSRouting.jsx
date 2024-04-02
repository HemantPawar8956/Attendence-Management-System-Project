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
import Batches from "./../components/SideBarComponents/Batches";
import Attendence from "../components/SideBarComponents/Attendence";
import Certificates from "../components/SideBarComponents/Certificates";
import Dashboard from "./../components/SideBarComponents/Dashboard";
import axios from "axios";
import QRCodeScanner from "./../components/QRCodeScanner";
import UserBatches from "./../components/SideBarComponents/UserBatches";
import PageNotFound from "./../pages/PageNotFound";

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
            children: [
              {
                path: "/home/students/Dashboard",
                element: <Dashboard />,
              },
              {
                path: "/home/students/Batches",
                element: <UserBatches />,
              },
              {
                path: "/home/students/certificates",
                element: <Certificates />,
              },
              {
                path: "/home/students/Attendence",
                element: <Attendence />,
              },
            ],
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
            children: [
              {
                path: "/home/Trackers/Dashboard",
                element: <Dashboard />,
              },
              {
                path: "/home/Trackers/Batches",
                element: <Batches />,
                loader: () => {
                  return axios.get(" http://localhost:5000/Batches");
                },
              },
              {
                path: "/home/Trackers/Attendence",
                element: <Attendence />,
              },
            ],
          },
          {
            path: "/home/HRs",
            element: <HR />,
          },
          {
            path: "/home/Managers",
            element: <Manager />,
          },
          {
            path: "/home/scanner",
            element: <QRCodeScanner />,
          },
        ],
      },
      {
        path: "/loader",
        element: <Loader />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
