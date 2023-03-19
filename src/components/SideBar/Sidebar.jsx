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

const SideBar = ({ isOpen, toggle }) => {


  const items = [
    // {
    //   link: '#',
    //   text: 'Dashboard',
    //   key: 'dashboard',
    //   icon: faBookReader,
    // },
    {
      link: '/analytics',
      text: 'Analytics',
      key: 'analytics',
      icon: faBriefcase
    },
    {
      link: '/keywordresearch',
      text: 'Keyword Research',
      key: 'kwsearch',
      icon: faBookReader
    },
    {
      link: '#',
      text: 'Logout',
      key: 'logout',
      icon: faPaperPlane
    },
  ]


  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle}>
          &times;
        </span>
        <h3>
          <span className="">My Channel</span>
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

          {items.map(item => <NavItem className="sidebar-items" key={item.key} style={{cursor:"pointer"}}>
            <NavLink tag={Link} to={item.link}>
              <FontAwesomeIcon icon={item.icon} className="mr-2 custom-color-sidebar" />
              <label className="custom-color-sidebar" style={{cursor:"pointer"}}>{item.text}</label>
            </NavLink>
          </NavItem>)}

        </Nav>
      </div>
    </div>
  )
};


export default SideBar;
