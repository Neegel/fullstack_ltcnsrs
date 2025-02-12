import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider , BrowserRouter } from 'react-router-dom';
import { ContextProvider } from "./contexts/ContextProvider";
import Routes from "./routes";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
       <RouterProvider router={Routes}/>
    </ContextProvider>
  </React.StrictMode>
);