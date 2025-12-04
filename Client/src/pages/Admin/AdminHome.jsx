import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { SiCodeproject } from "react-icons/si";
import { TbReportAnalytics } from "react-icons/tb";
import "./AdminHome.css";

const AdminHome = ({ setCurrentPage }) => {
  const employees = 24;
  const presentToday = 18;
  const projects = 6;
  const tasksAssigned = 32;

  return (
    <div className="admin-container p-4">

      <h2 className="fw-bold mb-4">Admin Home</h2>

      {/* QUICK STATS */}
      <div className="row mb-4">

        <div className="col-md-3 mb-3">
          <div className="admin-card">
            <FaUsers size={30} />
            <h4>{employees}</h4>
            <p>Total Employees</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="admin-card">
            <FaUsers size={30} />
            <h4>{presentToday}</h4>
            <p>Present Today</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="admin-card">
            <SiCodeproject size={30} />
            <h4>{projects}</h4>
            <p>Active Projects</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="admin-card">
            <MdAssignmentAdd size={30} />
            <h4>{tasksAssigned}</h4>
            <p>Total Tasks</p>
          </div>
        </div>

      </div>

      {/* MAIN NAVIGATION */}
      <h4 className="mt-4 mb-3">Quick Navigation</h4>

      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="admin-link-card" onClick={() => setCurrentPage("employeeManage")}>
            <FaUsers size={25} />
            <div>
              <h5>Employee Management</h5>
              <p>View, add & manage employee records.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="admin-link-card" onClick={() => setCurrentPage("adminDashboard")}>
            <TbReportAnalytics size={25} />
            <div>
              <h5>Attendance Records</h5>
              <p>Daily, monthly attendance analytics.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="admin-link-card" onClick={() => setCurrentPage("assignTask")}>
            <MdAssignmentAdd size={25} />
            <div>
              <h5>Assign Tasks</h5>
              <p>Assign tasks with priority & deadlines.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminHome;
