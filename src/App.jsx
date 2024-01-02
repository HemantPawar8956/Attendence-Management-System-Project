import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/AMSRouting";
import GlobalContext from "./contextApi/GlobalContext";

const App = () => {
  return (
    <GlobalContext>
      <RouterProvider router={router}></RouterProvider>
    </GlobalContext>
  );
};

export default App;
