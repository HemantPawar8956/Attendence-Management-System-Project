import React, { createContext, useEffect, useState } from "react";
import AxiosInstance from "../AxiosInstance/AMSAxiosInstance";

export let GlobalVariable = createContext("");
let { Provider } = GlobalVariable;
const GlobalContext = ({ children }) => {
  let [openQR, setOpenQR] = useState(false);
  let [openProfile, setOpenProfile] = useState(false);
  let [openSearch, setOpenSearch] = useState(false);
  let [userData, setUserData] = useState([]);
  let [trainerTimings, setTrainerTimings] = useState(false);
  let [batchType, setBatchType] = useState(false);
  let [isVerified, setIsVerified] = useState(false);
  let userLogin = (credentials) => {
    let valid = userData.find(
      (ele) =>
        ele.username == credentials.username &&
        ele.password == credentials.password
    );
    return valid;
  };

  let newUserValid = (credentials) => {
    console.log(credentials);
    let valid = userData.find((ele) => ele.username == credentials.username);
    return valid;
  };

  let fetchUsers = async () => {
    console.log(loginType);
    let { data } = await AxiosInstance.get(`/${loginType}`);
    setUserData(data);
  };
  console.log(userData);
  let [loginType, setLoginType] = useState("Trainer");
  let loginTypes = [
    {
      value: "Trainer",
      label: "Trainer",
    },
    {
      value: "Trackers",
      label: "Staffs",
    },
    {
      value: "Students",
      label: "Students",
    },
  ];

  let staffsLogin = [
    {
      value: "Trackers",
      label: "Tracker",
    },
    {
      value: "HRs",
      label: "HR",
    },
    {
      value: "Managers",
      label: "Manager",
    },
    {
      value: "Office-staffs",
      label: "Office-Staffs",
    },
  ];

  useEffect(() => {
    fetchUsers();
  }, [loginType]);
  return (
    <Provider
      value={{
        userData,
        userLogin,
        loginType,
        loginTypes,
        setLoginType,
        newUserValid,
        staffsLogin,
        openQR,
        setOpenQR,
        openProfile,
        setOpenProfile,
        openSearch,
        setOpenSearch,
        trainerTimings,
        setTrainerTimings,
        batchType,
        setBatchType,
        isVerified,
        setIsVerified,
      }}
    >
      {children}
    </Provider>
  );
};

export default GlobalContext;
