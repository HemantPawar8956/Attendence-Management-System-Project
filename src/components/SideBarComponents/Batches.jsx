import React, { useContex, useContext, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { GlobalVariable } from "./../../contextApi/GlobalContext";

const Batches = () => {
  let { data } = useLoaderData();
  let [Batche, setBatches] = useState(data);
  let { openSearch, setOpenSearch, setTrainerTimings, setBatchType } =
    useContext(GlobalVariable);

  let searchRef = useRef();

  let SearchBatch = (e) => {
    e.stopPropagation();
    let batchCode = searchRef.current.value;
    let filterBatches = data.filter((ele, index) => {
      return (
        batchCode.toUpperCase() == ele.BatchCode.slice(ele.BatchCode.length - 2)
      );
    });
    console.log(filterBatches);
    setBatches(filterBatches);
  };
  console.log(Batche);
  let closeSearchPanel = (e) => {
    e.stopPropagation();
    setOpenSearch(false);
  };

  let openSearchPanel = (e) => {
    e.stopPropagation();
    setOpenSearch(true);
    setBatches(data);
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
          <article
            className="w-[20%] h-[96.5%] border-l-2 border-slate-500 float-right bg-slate-900 p-3 fixed right-4 top-3 rounded-e-lg"
            onClick={openSearchPanel}
          >
            <div className="w-[100%]  m-auto border-b-2 border-slate-500 text-slate-400 text-xl flex justify-between items-center px-3 pb-2">
              Search Here <IoCloseSharp onClick={closeSearchPanel} />
            </div>
            <div className="w-[100%] flex flex-wrap justify-evenly">
              <input
                type="search"
                placeholder="Batch Code"
                name="query"
                ref={searchRef}
                className="w-[100%] my-3 py-1 rounded px-2 outline-none bg-slate-300 text-black placeholder:text-slate-600"
              />
              <button
                className=" px-6 h-[30px]  rounded bg-green-400 text-black flex justify-center items-center hover:bg-green-600"
                onClick={SearchBatch}
              >
                Search
              </button>
              <button
                className="text-black px-6 h-[30px] rounded bg-red-500 flex justify-center items-center hover:bg-red-700"
                onClick={closeSearchPanel}
              >
                Cancel
              </button>
            </div>
          </article>
        )}
        <table cellSpacing={10} cellPadding={5} className="w-[100%]">
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
            {Batche.length < 1 ? (
              <h1 className=" text-white font-bold">No Matched Batch Found</h1>
            ) : (
              Batche.map((ele, index) => {
                return (
                  <tr
                    key={index + 1}
                    className="w-[15%] border-2 text-white border-transparent hover:border-b-slate-800 batches"
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
                      <button className=" py-1 px-3 rounded bg-red-500  hover:bg-red-600" >
                        Verified
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Batches;
