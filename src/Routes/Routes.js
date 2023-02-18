import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LonginInfo/Login";
import SignUp from "../Pages/LonginInfo/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
