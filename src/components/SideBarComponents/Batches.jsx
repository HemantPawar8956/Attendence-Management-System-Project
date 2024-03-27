import React, { useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import { toast } from "react-toastify";
import { GlobalVariable } from "./../../contextApi/GlobalContext";

const Batches = () => {
  let { data } = useLoaderData();
  let { openSearch, setOpenSearch } = useContext(GlobalVariable);
  console.log(data);
  let closeSearchPanel = (e) => {
    e.stopPropagation();
    setOpenSearch(false);
  };

  let openSearchPanel = (e) => {
    e.stopPropagation();
    setOpenSearch(true);
  };
  return (
    <section className="w-[100%] h-[100%] p-2" onClick={closeSearchPanel}>
      <nav className="w-[100%] flex justify-between items-start flex-wrap">
        <div className="w-[250px] h-[30px] text-orange-400 text-lg flex justify-between items-center">
          <p className="w-[20%] text-3xl flex justify-center items-center text-white">
            <BiSolidHome />
          </p>
          <IoBookOutline className="text-2xl" /> Batches Attendence
        </div>
        <div className="w-[600px] h-[30px] border-2"></div>
        <div className="w-[600px] h-[38px]  flex items-center ">
          <button
            className="h-[90%] w-[13%] border-2 text-white bg-blue-700 rounded"
            onClick={openSearchPanel}
          >
            Search
          </button>
        </div>
      </nav>
      <article className="w-[100%] h-[90%] py-1 overflow-x-auto relative">
        {openSearch && (
          <section className="w-[80%] h-[85%] fixed" onClick={closeSearchPanel}>
            <div
              className="w-[25%] h-[100%] border-2 float-right"
              onClick={openSearchPanel}
            ></div>
          </section>
        )}
        <table cellSpacing={10} cellPadding={5} className=" h-[100%] w-[100%]">
          <thead className=" text-white ">
            <tr>
              <th>Attendance</th>
              <th>Batch Code</th>
              <th>Subject</th>
              <th>Trainer</th>
              <th>Status</th>
              <th>Total Classes</th>
              <th>Attended Today</th>
              <th>Total Students</th>
              <th>Tentative Start</th>
              <th>Mode Of Class</th>
              <th>Class Type</th>
              <th>Trainer Login Logout</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((ele, index) => {
              return (
                <tr
                  key={index + 1}
                  className="border-2 text-white border-transparent hover:border-b-slate-800 p-2 batches"
                >
                  <td>
                    <NavLink to={"/home/scanner"} className="takeBtn">
                      Take
                    </NavLink>
                  </td>
                  <td className="text-green-400">{ele.BatchCode}</td>
                  <td>{ele.Subject}</td>
                  <td>{ele.Trainer_Name}</td>
                  <td>
                    <p className="w-[60px] h-[30px] bg-green-700 rounded flex items-center justify-center">
                      Active
                    </p>
                  </td>
                  <td className="">
                    <span className="border-2 p-1 bg-slate-800 rounded">
                      40
                    </span>
                  </td>
                  <td>
                    <span className="border-2 p-1 bg-slate-800 rounded">
                      40
                    </span>
                  </td>
                  <td>
                    <span className="border-2 p-1 bg-slate-800 rounded">
                      40
                    </span>
                  </td>
                  <td>22/01/2024</td>
                  <td>Offline</td>
                  <td>Weekday</td>
                  <td>
                    <Link className="viewBtn">View</Link>
                  </td>
                  <td>
                    <button className="border-2 py-1 px-3 rounded bg-red-500 ">
                      Verified
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Batches;
