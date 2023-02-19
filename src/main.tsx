import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boletos from "./routes/Boletos";
import ErrorPage from "./routes/ErrorPage";
import Principal from "./routes/Principal";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <Principal />,
    errorElement: <ErrorPage />,
  },
  {
    path: "boletos",
    element: <Boletos />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
