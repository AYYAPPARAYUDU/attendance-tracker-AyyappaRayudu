import React, { useState } from "react";
import AdminNavBar from "../../components/AdminComponents/AdminNavBar";
import AdminSideBar from "../../pages/Admin/AdminSideBar";
import "./AdminLayout.css";

const AdminLayout = ({ Component }) => {
  const [currentPage, setCurrentPage] = useState("adminHome");

  return (
    <>
      <AdminNavBar />

      <div className="admin-layout">
        {/* Sidebar */}
        <div className="admin-sidebar-container">
          <AdminSideBar setCurrentPage={setCurrentPage} />
        </div>

        {/* Main Content */}
        <div className="admin-main-content">
          <Component page={currentPage} />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
