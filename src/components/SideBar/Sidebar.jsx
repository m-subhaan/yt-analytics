import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPaperPlane,
  faBookReader,
  faEye,
  faChartColumn
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>
        <span>My Channel</span>
      </h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>
          <FontAwesomeIcon icon={faChartColumn} className="mr-2 ml-2" />
          <span>1.3M Subscribers</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faEye} className="mr-2 ml-2" />
          <span>1500 Watch Hours</span>
        </p>
        <hr></hr>
        <NavItem>
          <NavLink tag={Link} to={"/about"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Analytics
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/pages"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faBookReader} className="mr-2" />
            Keyword Research
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
