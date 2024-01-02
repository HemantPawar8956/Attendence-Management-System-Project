import React from "react";

const Loader = () => {
  return (
    <section className="h-[91vh] w-[100%] flex justify-center items-center">
      <div className=" @apply  text-center w-[100%]  flex justify-center items-center;">
        <svg
          viewBox="10 10 140 140"
          className=" @apply animate-[loading-rotate_2s_linear_infinite] h-[42px] w-[42px]"
        >
          <circle
            cx="95"
            cy="95"
            r="80"
            fill="none"
            className=" @apply stroke-2 stroke-[#409eff] animate-[loading-dash_1.5s_ease-in-out_infinite] @apply rotate-[1turn]"
          ></circle>
        </svg>
      </div>
    </section>
  );
};

export default Loader;
