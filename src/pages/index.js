import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../components/SideBar/Sidebar";
import "./App.css";

const Dashboard = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);




  return (<>
    <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />

  </>
  );
};

export default Dashboard;