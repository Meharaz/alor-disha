import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
