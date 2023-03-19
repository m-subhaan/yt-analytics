import React from "react";
import { Navigate } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/login";
import Logout from "../pages/Authentication/logout";
import SignUp from "../pages/Authentication/signup";


// Dashboard
import Analytics from "../pages/Analytics/Analytics";
import KeywordResearch from "../pages/KeywordResearch/KeywordResearch";

import LadningContainer from "../pages/Landing";

//Pricing
import Pricing from "../pages/Pricing/pricing";


const userRoutes = [

  //Dashboard
  { path: "/analytics", component: Analytics },
  { path: "/keywordresearch", component: KeywordResearch },
  { path: "/", component: LadningContainer},
  { path: "/pricing", component: Pricing},

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    component: () => {
      return <Navigate to="/" />;
    },
  },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
];

export { userRoutes, authRoutes };
