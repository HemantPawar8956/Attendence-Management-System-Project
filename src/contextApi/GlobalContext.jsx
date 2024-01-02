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
  
  return <Provider value={{ Authentication }}>{children}</Provider>;
};

export default GlobalContext;
