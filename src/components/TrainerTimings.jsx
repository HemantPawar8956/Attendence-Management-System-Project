import React from "react";
import { MdClose } from "react-icons/md";

const TrainerTimings = ({ data: { setTrainerTimings } }) => {
  let closePanel = () => {
    setTrainerTimings(false);
  };
  return (
    <section
      className="w-[100%] h-[100vh] flex justify-center items-center fixed TrainerTimings"
      onClick={closePanel}
    >
      <article className="w-[72%] h-[85%] border-2 Qrcodes rounded-md flex justify-center flex-wrap bg-slate-900">
        <h1 className="w-[100%] h-[10%] text-xl border-b-2 p-4 py-2 flex justify-between items-center text-white">
          Trainer Attendence
          <MdClose
            className="float-right bg-white text-black rounded-sm hover:bg-slate-200"
            onClick={closePanel}
          />
        </h1>
      </article>
    </section>
  );
};

export default TrainerTimings;
