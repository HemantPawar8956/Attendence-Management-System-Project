import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

const CreateUser = ({ userType }) => {
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    id: "",
    fullName: "",
    username: "",
    email: "",
    contact: "",
    gender: "",
  });

  let { fullName, username, email, contact, gender } = userDetails;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  console.log(userDetails);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/${userType}`, userDetails);
    navigate(`/home`);
  };

  return (
    <section className="p-4 createUser h-[100%] flex justify-center items-center">
      <article className="w-[55%] h-[60%] bg-slate-100 p-2 rounded-md ">
        <h1 className="w-[100%] text-2xl font-medium text-center p-2">
          Create User
          <MdClose className="float-right hover:bg-slate-600 hover:text-white" />
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-[100%] h-[90%] p-2 flex flex-wrap justify-center content-evenly"
        >
          <div className="w-[100%] border-2 border-gray-950 p-1">
            <label htmlFor="loginId" className="text-lg">
              User Id :
            </label>
            <input
              type="text"
              name="fullName"
              id="loginId"
              value={fullName}
              placeholder="Enter User ID"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="w-[100%] border-2 border-gray-950 p-1">
            <label htmlFor="username" className="text-lg">
              User Name :{" "}
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter UserName"
              value={username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-[100%] border-2 border-gray-950 p-1">
            <label htmlFor="emailId" className="text-lg">
              Email Id :{" "}
            </label>
            <input
              type="email"
              name="email"
              id="emailId"
              value={email}
              placeholder="Enter Your Email Id "
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="w-[100%] border-2 border-gray-950 p-1">
            <label htmlFor="mobileNo" className="text-lg">
              Contact NO :{" "}
            </label>
            <input
              type="tel"
              name="contact"
              id="mobileNo"
              pattern="[/0-9]{10}"
              placeholder="Please Enter Your Mobile No."
              value={contact}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="w-[100%] border-2 border-gray-950 p-1 flex justify-end flex-wrap ">
            <label htmlFor="gender" className="w-[100%] text-lg">
              Select Gender :
            </label>
            <div
              className="w-[70%] flex"
              name="gender"
              value={gender}
              onChange={handleChange}
            >
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male" id="gender">
                Male
              </label>
              <input type="radio" name="gender" id="Female" value="female" />
              <label htmlFor="Female" id="gender">
                FeMale
              </label>
              <input type="radio" name="gender" id="Other" value="Others" />
              <label htmlFor="Other" id="gender">
                Other
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="h-[11%] w-[30%] bg-blue-600 rounded-md text-white text-xl"
          >
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default CreateUser;
