import React, { createContext, useEffect, useState } from "react";
import AxiosInstance from "../AxiosInstance/AMSAxiosInstance";

export let GlobalVariable = createContext("");
let { Provider } = GlobalVariable;
const GlobalContext = ({ children }) => {
  let [userData, setUserData] = useState([]);
  let userLogin = (credentials) => {
    console.log(credentials);
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
    let { data } = await AxiosInstance.get(`/${loginType}`);
    setUserData(data);
  };
  console.log(userData);
  let [loginType, setLoginType] = useState("Trainer");
  let loginTypes = [
    {
      value: "trainer",
      label: "Trainer",
    },
    {
      value: "staffs",
      label: "Staffs",
    },
    {
      value: "students",
      label: "Students",
    },
    {
      value: "trackers",
      label: "Tracker",
    },
  ];

  useEffect(() => {
    fetchUsers();
  }, [loginType]);
  return (
    <Provider
      value={{userData, userLogin, loginType, loginTypes, setLoginType, newUserValid }}
    >
      {children}
    </Provider>
  );
};

export default GlobalContext;
