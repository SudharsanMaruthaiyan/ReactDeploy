import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./route/route";
import { AppProvider } from "./context/AppContext";

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<RouterProvider router={Route} />);
