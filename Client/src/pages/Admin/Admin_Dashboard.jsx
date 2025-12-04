import React from "react";
import "./AdminDashboard.css";
import { FaUsers } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";

const AdminDashboard = () => {
  const employees = [
    { id: "EMP001", name: "Ayyappa Rayudu", department: "Engineering", role: "Frontend Developer" },
    { id: "EMP002", name: "Siva Kumar", department: "Backend", role: "Java Developer" },
    { id: "EMP003", name: "Krishna", department: "Testing", role: "QA Engineer" }
  ];

  const attendanceSummary = [
    { name: "Ayyappa", present: 22, absent: 2, hours: "150h" },
    { name: "Siva", present: 20, absent: 4, hours: "140h" },
    { name: "Krishna", present: 24, absent: 0, hours: "160h" }
  ];

  const tasks = [
    { task: "API Integration", assignedTo: "Ayyappa", priority: "High", status: "In Progress" },
    { task: "Testing Login Module", assignedTo: "Krishna", priority: "Medium", status: "Completed" },
    { task: "Database Setup", assignedTo: "Siva", priority: "High", status: "To Do" }
  ];

  // Priority color logic
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "red";
      case "Medium": return "orange";
      case "Low": return "green";
      default: return "black";
    }
  };

  // Status color logic
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "green";
      case "In Progress": return "blue";
      case "To Do": return "gray";
      default: return "black";
    }
  };

  return (
    <div className="admin-dashboard p-4">

      <h2 className="fw-bold mb-4">Admin Dashboard Overview</h2>

      {/* ========== EMPLOYEE DETAILS ========== */}
      <div className="admin-section mb-5 shadow-sm p-4 rounded">
        <h4 className="section-title">
          <FaUsers size={22} className="me-2" /> Employee Details
        </h4>

        <table className="table table-hover mt-3 rounded-table">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.department}</td>
                <td>{e.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========== ATTENDANCE SUMMARY ========== */}
      <div className="admin-section mb-5 shadow-sm p-4 rounded">
        <h4 className="section-title">
          <MdSchedule size={22} className="me-2" /> Attendance Summary
        </h4>

        <table className="table table-hover mt-3 rounded-table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Total Hours</th>
            </tr>
          </thead>

          <tbody>
            {attendanceSummary.map((a, index) => (
              <tr key={index}>
                <td>{a.name}</td>
                <td className="fw-bold text-success">{a.present}</td>
                <td className="fw-bold text-danger">{a.absent}</td>
                <td>{a.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========== TASK LIST ========== */}
      <div className="admin-section shadow-sm p-4 rounded">
        <h4 className="section-title">
          <MdAssignmentTurnedIn size={22} className="me-2" /> Task Assignments
        </h4>

        <table className="table table-hover mt-3 rounded-table">
          <thead className="table-dark">
            <tr>
              <th>Task</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((t, index) => (
              <tr key={index}>
                <td>{t.task}</td>
                <td>{t.assignedTo}</td>

                <td style={{ color: getPriorityColor(t.priority), fontWeight: "bold" }}>
                  {t.priority}
                </td>

                <td style={{ color: getStatusColor(t.status), fontWeight: "bold" }}>
                  {t.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;
