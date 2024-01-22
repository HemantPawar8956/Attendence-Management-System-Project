import React from "react";
import AsideComp from "./../components/AsideComp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rightArrow from "../assets/images/right-arrow.png"
import enterprise from "../assets/images/enterprise.png"
import admissios from "../assets/images/contract.png"
import student from "../assets/images/reading.png"
import staff from "../assets/images/management.png"
import academicPlan from "../assets/images/roadmap.png"
import assets from "../assets/images/assets.png"
import bill from "../assets/images/bill.png"
import leave from "../assets/images/dismissal.png"
import assignment from "../assets/images/assignment.png"
import reports from "../assets/images/dashboard.png"
import attendance from "../assets/images/attendance.png"
import schedule from "../assets/images/calendar.png"
import { NavLink, Outlet } from "react-router-dom";
const Home = () => {
  let selectUserForLeftPanel = {
    principal: [
      {
        id: 1,
        logo: enterprise,
        optName: "Enterprise",
        path: "/Home/",
        dropdown: rightArrow
      },
      {
        id: 2,
        logo: admissios,
        optName: "Admissions",
        path: "/Home/admissions",
        dropdown: rightArrow
      },
      {
        id: 3,
        logo: student,
        optName: "Students",
        path: "/Home/students",
        dropdown: rightArrow
      },
      {
        id: 4,
        logo: staff,
        optName: "Staff",
        path: "/Home/staff",
        dropdown: rightArrow
      },
      {
        id: 5,
        logo: academicPlan,
        optName: "Academic Plans",
        path: "/Home/academicPlans",
        dropdown: rightArrow
      },
      {
        id: 6,
        logo: assets,
        optName: "Assets",
        path: "/Home/assets",
        dropdown: rightArrow
      },
      {
        id: 7,
        logo: bill,
        optName: "Billing",
        path: "/Home/billing",
        dropdown: rightArrow
      },
      {
        id: 8,
        logo: leave,
        optName: "Leave Management ",
        path: "/Home/leaveManagement",
        dropdown: rightArrow
      },
    ],
    TeachingStaff: [
      {
        id: 1,
        logo: enterprise,
        optName: "Enterprise",
        path: "/Home/enterprise",
        dropdown: rightArrow
      },
      {
        id: 2,
        logo: admissios,
        optName: "Admissions",
        path: "/Home/admissions",
        dropdown: rightArrow
      },
      {
        id: 3,
        logo: student,
        optName: "Students",
        path: "/Home/students",
        dropdown: rightArrow
      },
      {
        id: 4,
        logo: staff,
        optName: "Staff",
        path: "/Home/staff",
        dropdown: rightArrow
      },
      {
        id: 5,
        logo: academicPlan,
        optName: "Academic Plans",
        path: "/Home/academicPlans",
        dropdown: rightArrow
      },
      {
        id: 6,
        logo: assignment,
        optName: "Assignments",
        path: "/Home/assignments",
        dropdown: rightArrow
      },
      {
        id: 7,
        logo: reports,
        optName: "Reports",
        path: "/Home/reports",
        dropdown: rightArrow
      },
      {
        id: 8,
        logo: staff,
        optName: "Exam Management ",
        path: "/Home/examManagement",
        dropdown: rightArrow
      },
    ],
    nonTeachingStaff: [
      {
        id: 1,
        logo: enterprise,
        optName: "Enterprise",
        path: "/Home/enterprise",
        dropdown: rightArrow
      },
      {
        id: 2,
        logo: admissios,
        optName: "Admissions",
        path: "/Home/admissions",
        dropdown: rightArrow
      },
      {
        id: 3,
        logo: student,
        optName: "Students",
        path: "/Home/students",
        dropdown: rightArrow
      },
      {
        id: 4,
        logo: staff,
        optName: "Staff",
        path: "/Home/staff",
        dropdown: rightArrow
      },
      {
        id: 5,
        logo: academicPlan,
        optName: "Academic Plans",
        path: "/Home/academicPlans",
        dropdown: rightArrow
      },
      {
        id: 6,
        logo: reports,
        optName: "Enquiry",
        path: "/Home/enquiry",
        dropdown: rightArrow
      },
      {
        id: 7,
        logo: bill,
        optName: "Billing",
        path: "/Home/billing",
        dropdown: rightArrow
      },
      {
        id: 8,
        logo: staff,
        optName: "Exam Management ",
        path: "/Home/examManagement",
        dropdown: rightArrow
      },
    ],
    Students: [
      {
        id: 1,
        logo: enterprise,
        optName: "Enterprise",
        path: "/Home/enterprise",
        dropdown: rightArrow
      },
      {
        id: 2,
        logo: admissios,
        optName: "Admissions",
        path: "/Home/admissions",
        dropdown: rightArrow
      },
      {
        id: 3,
        logo: attendance,
        optName: "Attendence",
        path: "/Home/attendence",
        dropdown: rightArrow
      },
      {
        id: 4,
        logo: schedule,
        optName: "Exam Schedule",
        path: "/Home/examSchedule",
        dropdown: rightArrow
      },
      {
        id: 5,
        logo: academicPlan,
        optName: "Academic Plans",
        path: "/Home/academicPlans",
        dropdown: rightArrow
      },
      {
        id: 6,
        logo: reports,
        optName: "Progress Reports",
        path: "/Home/progressReports",
        dropdown: rightArrow
      },
      {
        id: 7,
        logo: leave,
        optName: "Holidays",
        path: "/Home/holidays",
        dropdown: rightArrow
      },
      {
        id: 8,
        logo: schedule,
        optName: "TimeTable",
        path: "/Home/timeTable",
        dropdown: rightArrow
      },
    ]
  }
  const notify = () => toast("Wow so easy!");
  return (
    <div className="flex">
      <section className="w-[23%] mt-4  h-[80vh]  bg-[#fdfdfd]  px-4 border-e-8 border-t-2">
        {
          selectUserForLeftPanel.principal.map((val, ind) => {
            return (
              <section key={ind+1}>
                <NavLink to={val.path} key={ind + 1} className={(isActive) => isActive ? "bg-[orange]" : ""} >
                  <div className="flex justify-between items-center rounded-md px-4 py-3 my-4 bg-slate-100 hover:bg-orange-400 hover:text-white">
                    <img src={val.logo} alt="" className="w-[2vw] h-[4vh]" />
                    <div>{val.optName}</div>
                    <img src={val.dropdown} alt="" className="w-[1vw] h-[2vh]" />
                  </div>
                </NavLink>
              </section>
            )
          })
        }
      </section>
      <Outlet />
    </div>
  )
}

export default Home;
