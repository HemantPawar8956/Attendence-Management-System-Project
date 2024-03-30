import React, { useContex, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import { GlobalVariable } from "./../../contextApi/GlobalContext";

const Batches = () => {
  let { data } = useLoaderData();
  let { openSearch, setOpenSearch, setTrainerTimings, setBatchType } =
    useContext(GlobalVariable);
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
            className="h-[90%] w-[11%] text-white bg-blue-600 hover:bg-blue-800 rounded"
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
            <tr className="bg-black">
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
                    <button
                      className="takeBtn"
                      onClick={() => {
                        setBatchType(true);
                      }}
                    >
                      Take
                    </button>
                  </td>
                  <td className="text-green-400">{ele.BatchCode}</td>
                  <td>{ele.Subject}</td>
                  <td>{ele.Trainer_Name}</td>
                  <td>
                    <p className="w-[60px] h-[30px] bg-green-600 rounded flex items-center justify-center">
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
                    <button
                      className="viewBtn "
                      onClick={() => {
                        setTrainerTimings(true);
                      }}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button className=" py-1 px-3 rounded bg-red-500  hover:bg-red-600">
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
