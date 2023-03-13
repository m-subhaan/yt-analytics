import React from "react";
import { Navigate } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/login";
import Logout from "../pages/Authentication/logout";
import SignUp from "../pages/Authentication/signup";


// Dashboard
import Dashboard from "../pages";

const userRoutes = [

  //Dashboard
  { path: "/dashboard", component: Dashboard },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    component: () => {
      return <Navigate to="/dashboard" />;
    },
  },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
];

export { userRoutes, authRoutes };
