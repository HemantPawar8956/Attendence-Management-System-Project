import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

const Profile = ({ data: { state, setOpenProfile } }) => {
  let [userData, setUserData] = useState({
    id: state?.id,
    username: state?.username,
    role: state?.role,
  });

  let [showEditProfile, setEditProfile] = useState(false);
  let urls = [
    {
      icon: <FaGithub />,
      name: "Github",
      url: "https://github.com/" + userData.username,
    },
    {
      icon: <SiLinkedin />,
      name: "Linkedin",
      url: `https://www.linkedin.com/in/${userData.username}`,
    },
    {
      icon: "",
      name: "Other urls",
      url: `https://www.linkedin.com/in/${userData.username}`,
    },
  ];
  console.log(state);
  let { id, username, date, role } = userData;

  let closeProfile = (e) => {
    e.stopPropagation();
    setOpenProfile(false);
  };
  let showEditProfilePanel = (e) => {
    e.stopPropagation();
    setEditProfile(true);
  };
  let closeEditProfilePanel = (e) => {
    e.stopPropagation();
    setEditProfile(false);
  };
  return (
    <section
      className="w-[100%] h-[100vh] flex justify-center items-center fixed ProfilePage"
      onClick={closeProfile}
    >
      <article
        className="w-[60%] h-[70.5%]  bg-white rounded-md flex justify-evenly p-2 content-evenly flex-wrap "
        onClick={(e) => {
          e.stopPropagation();
          setOpenProfile(true);
        }}
      >
        <h1 className="w-[100%] flex justify-between px-2 relative">
          <FaAngleLeft
            className="hover:bg-slate-400 text-2xl p-1 rounded-md"
            onClick={closeProfile}
          />
          <MdMenuOpen
            className="text-2xl rounded-md "
            onMouseEnter={showEditProfilePanel}
            onMouseLeave={closeEditProfilePanel}
          />
          {showEditProfile && (
            <div
              className="float-right absolute right-5 top-5 border-2 py-1 px-3 text-white bg-slate-800 opacity-60 rounded  "
              onMouseEnter={showEditProfilePanel}
              onMouseLeave={closeEditProfilePanel}
            >
              Edit Profile
            </div>
          )}
        </h1>
        <section className="w-[49%]  h-[90%]">
          <div className="w-[100%] h-[70%] border-2">Profile Image</div>
          <div className="w-[100%] h-[30%] p-1 flex content-evenly flex-wrap bg-gray-200 rounded-lg">
            {urls.map((ele, index) => {
              return (
                <div
                  className="w-[100%] p-2 border-2 border-gray-200  flex items-center flex-wrap justify-between bg-white rounded-md"
                  key={index + 1}
                >
                  <span className=" h-[100%] flex items-center">
                    <span className="text-xl me-2">{ele.icon}</span> {ele.name}
                  </span>
                  <FaAngleRight />
                </div>
              );
            })}
          </div>
        </section>
        <section className="w-[49%] border-2 h-[90%]">prodile Details</section>
      </article>
    </section>
  );
};

export default Profile;
