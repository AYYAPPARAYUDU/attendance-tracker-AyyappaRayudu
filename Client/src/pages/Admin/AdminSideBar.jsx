import React, { useState, useEffect } from "react";
import "./AdminSideBar.css";

import { MdSpaceDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiCodeproject } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

import { Link, useLocation } from "react-router-dom";

const AdminSideBar = ({ setCurrentPage }) => {
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const updatePage = (page) => {
    if (setCurrentPage) setCurrentPage(page);
  };

  return (
    <div className="admin-sidebar shadow">

      {/* MAIN NAVIGATION */}
      <div className="admin-nav-links">

        <Link
          to="/adminhome"
          className={`admin-link ${active === "/adminhome" ? "active" : ""}`}
          onClick={() => updatePage("adminHome")}
        >
          <MdSpaceDashboard size={20} /> Admin Home
        </Link>

        <Link
          to="/admindashboard"
          className={`admin-link ${active === "/admindashboard" ? "active" : ""}`}
          onClick={() => updatePage("adminDashboard")}
        >
          <TbReportAnalytics size={20} /> Dashboard
        </Link>

       

        <Link
          to="/assign-task"
          className={`admin-link ${active === "/assign-task" ? "active" : ""}`}
          onClick={() => updatePage("assignTask")}
        >
          <MdAssignmentAdd size={20} /> Assign Tasks
        </Link>

        <Link
          to="/admin-projects"
          className={`admin-link ${active === "/admin-projects" ? "active" : ""}`}
          onClick={() => updatePage("adminProjects")}
        >
          <SiCodeproject size={20} /> Projects
        </Link>

      </div>

      {/* FOOTER SECTION */}
      <div className="admin-footer">

        <Link
          to="/admin-settings"
          className={`admin-link ${active === "/admin-settings" ? "active" : ""}`}
          onClick={() => updatePage("adminSettings")}
        >
          <IoIosSettings size={20} /> Settings
        </Link>

        <Link to="/login" className="admin-logout">
          <div className="admin-link logout">
            <LuLogOut size={20} /> Logout
          </div>
        </Link>

      </div>

    </div>
  );
};

export default AdminSideBar;
