import React from "react";
import { useLoaderData } from "react-router-dom";

const Batches = () => {
  let { data } = useLoaderData();
  console.log(data);
  return (
    <section className="w-[100%] h-[100%] p-2">
      <nav className="w-[100%] border-2 border-black flex justify-between items-start flex-wrap">
        <div className="w-[300px] h-[30px] border-2 "></div>
        <div className="w-[600px] h-[30px] border-2"></div>
        <div className="w-[600px] h-[35px] border-2"></div>
      </nav>
      <article className="w-[100%] h-[90%] py-1">
        <table
          cellSpacing={10}
          cellPadding={5}
          className="w-full h-[100%] overflow-y-scroll "
        >
          <thead className="">
            <tr>
              <th>Attendance</th>
              <th>Batch Code</th>
              <th>Subject</th>
              <th>Trainer</th>
              <th>status</th>
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
                  className="border-2  border-transparent hover:border-white p-2 my-1 batches"
                >
                  <td>
                    <button className="w-[55px] h-[30px] bg-white rounded-[4px]">
                      Take
                    </button>
                  </td>
                  <td>{ele.BatchCode}</td>
                  <td>{ele.Subject}</td>
                  <td>{ele.Trainer_Name}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
