import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    id: "",
    fullName: "",
    username: "",
    email: "",
    contact: "",
    gender: "",
    image: "",
  });

  let { fullName, username, email, contact, gender, image } = userDetails;
  let handleImage = (e) => {
    let { files, name } = e.target;
    setUserDetails({ ...userDetails, [name]: URL.createObjectURL(files[0]) });
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  console.log(userDetails);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000", userDetails);
    navigate("/allusers/user");
  };

  return (
    <section className="w-[83%] flex justify-center align-middle bg-gray-700">
    <article className="w-[70%]">
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grp">
          <label htmlFor="loginId">User Id : </label>
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

        <div className="form-grp">
          <label htmlFor="username">User Name : </label>
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

        <div className="form-grp">
          <label htmlFor="emailId">Email Id : </label>
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

        <div className="form-grp">
          <label htmlFor="mobileNo">Contact NO : </label>
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

        <div className="form-grp">
          <label htmlFor="gender">Select Gender :</label>
          <div
            className="genders"
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
        <button type="submit">Submit</button>
      </form>
      </article>
    </section>
  );
};

export default CreateUser;
