import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/main.less";
import "antd/dist/antd.less";

import BoilerContainer from "./containers/BoilerContainer";
import { userRoutes, authRoutes } from "./routes";
const routes = [userRoutes, authRoutes]
const App = () =>
  <>
    <BoilerContainer />
    <Router >
      <Routes>
        {routes.map(key => key.map(({ path, component: Component }) =>
          <Route
            path={path}
            element={<Component />}
          />
        ))}

      </Routes>
    </Router>
  </>

export default App;