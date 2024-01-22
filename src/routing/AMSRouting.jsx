import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import LandingPage from "./../pages/LandingPage";
import Login from "./../pages/Login";
import SignUp from "./../pages/SignUp";
import Enterprise from './../components/leftNavbarComponents/Enterprise';
import Admissions from '../components/leftNavbarComponents/Admissions';
import Students from './../components/leftNavbarComponents/Students';
import Staff from './../components/leftNavbarComponents/Staff';
import AcademicPlans from './../components/leftNavbarComponents/AcademicPlans';
import Assets from './../components/leftNavbarComponents/Assets';
import Billing from './../components/leftNavbarComponents/Billing';
import LeaveManagement from './../components/leftNavbarComponents/LeaveManagement';

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

        ],
      },
      {
        path: "/Home",
        element: <Home />,
        children: [
          {
            path: "/Home/",
            element: <Enterprise />
          },
          {
            path: "/Home/admissions",
            element: <Admissions />
          },
          {
            path: "/Home/students",
            element: <Students />
          },
          {
            path: "/Home/staff",
            element: <Staff />
          },
          {
            path: "/Home/academicPlans",
            element: <AcademicPlans />
          },
          {
            path: "/Home/assets",
            element: <Assets />
          },
          {
            path: "/Home/billing",
            element: <Billing />
          },
          {
            path: "/Home/leaveManagement",
            element: <LeaveManagement />
          }

        ]

      },
    ],
  },
]);
