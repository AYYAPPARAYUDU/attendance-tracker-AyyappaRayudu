import React from "react";
import "./AdminNavBar.css"

const AdminNavBar = () => {
  return (
    <div className="admin-navbar shadow-sm px-4 py-2 d-flex align-items-center justify-content-between">

      <h5 className="fw-bold">Admin Panel</h5>

      <div className="d-flex gap-3 align-items-center">
        <span className="admin-user">Admin</span>
      </div>

    </div>
  );
};

export default AdminNavBar;
