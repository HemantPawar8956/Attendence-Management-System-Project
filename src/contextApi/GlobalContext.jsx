import React, { createContext, useState } from "react";

export let GlobalVariable = createContext("");
let { Provider } = GlobalVariable;
const GlobalContext = ({ children }) => {
  let Authentication = (data, credentials) => {
    console.log(data);
    console.log(credentials);
    let valid = data.find(
      (ele) =>
        ele.username == credentials.username &&
        ele.password == credentials.password
    );
    return valid;
  };

  let [loginType, setLoginType] = useState("Trainers");
  let loginTypes = [
    {
      value: "Trainer",
      label: "Trainer",
    },
    {
      value: "Staffs",
      label: "Staffs",
    },
    {
      value: "Students",
      label: "Students",
    },
  ];

  return (
    <Provider value={{ Authentication, loginType, loginTypes, setLoginType }}>
      {children}
    </Provider>
  );
};

export default GlobalContext;
