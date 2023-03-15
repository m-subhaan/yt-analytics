import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import { userRoutes, authRoutes } from "./routes";
import "./styles/main.css";

const routes = [userRoutes, authRoutes]
const App = () =>
  <>
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