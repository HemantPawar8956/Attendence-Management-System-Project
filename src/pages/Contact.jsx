import React from "react";
import contactImage from ".././assets/contactPage.png";
import { TbPhoneCall } from "react-icons/tb";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const Contact = () => {
  let handleSubmit = () => {};
  return (
    <section className="w-[80%]  h-[95%] m-auto">
      <article className="h-[94%] w-[100%] bg-slate-100 flex justify-evenly flex-wrap rounded-2xl shadow-lg text-slate-900 py-2 ">
        <h1 className="text-center ">Have Some Questions ? </h1>
        <p className="w-[100%] indent-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi
          reprehenderit cum laudantium, quis ex harum odio tempora amet et
          voluptates fugiat asperiores soluta deleniti eos qui, mollitia aperiam
          debitis dolores tempore perferendis. Rerum fugiat nesciunt praesentium
        </p>

        <div className="h-[100%] w-[48%]">
          <img
            src={contactImage}
            alt=""
            className="w-[100%] h-[60%] bg-slate-100 rounded-lg"
          />
          <h1 className="text-xl">Contact Us On :</h1>
          <ul className="list-none w-[70%]">
            <li className=" w-[100%] p-1 text-indigo-600 font-semibold">
              <Link to="tel:8459254214" className="w-[100%] flex items-center ">
                <TbPhoneCall className="rounded text-2xl mr-3 bg-indigo-500 text-white p-1" />{" "}
                +91 8459254214
              </Link>
            </li>
            <li className=" w-[100%] p-1 text-indigo-600 font-semibold">
              <Link
                to="mailto:hemantpawar26102@gmail.com"
                target="_blank"
                className="w-[100%] flex items-center"
              >
                <FaEnvelopeOpenText className="rounded text-2xl mr-3 bg-indigo-500 text-white p-1 " />
                hemantpawar26102@gmail.com
              </Link>
            </li>
            <li className=" flex text-center w-[100%] p-1 text-indigo-600 font-semibold">
              <MdOutlineLocationOn className="rounded text-2xl mr-3 bg-indigo-500 text-white p-1 " />
              Others
            </li>
          </ul>
        </div>
        <form className="h-[89%] w-[42%] flex justify-center content-between flex-wrap py-3 rounded text-white">
          <div className="w-[100%] px-7">
            <input
              type="text"
              name="userId"
              id="loginId"
              placeholder="Enter First Name"
              required
              className="w-[100%] outline-none p-1 px-3 font-semibold rounded bg-slate-600 "
            ></input>
          </div>

          <div className="w-[100%] py-1 px-7">
            <input
              type="text"
              name="login"
              id="username"
              placeholder="Enter Last Name"
              required
              className="w-[100%] outline-none p-1 px-3 font-semibold rounded bg-slate-600"
            />
          </div>

          <div className="w-[100%] py-1 px-7">
            <input
              type="email"
              name="emailId"
              id="emailId"
              placeholder="Enter Your Email Id "
              required
              className="w-[100%] outline-none p-1 px-3 font-semibold rounded bg-slate-600"
            ></input>
          </div>

          <div className="w-[100%] py-1 px-7">
            <input
              type="tel"
              name="contact"
              id="mobileNo"
              pattern="[/0-9]{10}"
              placeholder="Please Enter Your Mobile No."
              required
              className="w-[100%] outline-none p-1 px-3 font-semibold rounded bg-slate-600"
            ></input>
          </div>
          <div className="w-[100%] py-1 px-7">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Write Your Message Here...."
              className="w-[100%] outline-none py-1 px-3 font-semibold bg-slate-600 rounded"
            ></textarea>
          </div>
          <button className="h-[9%] w-[40%] bg-slate-600 text-white rounded hover:bg-indigo-800 font-semibold">
            Send Message
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
