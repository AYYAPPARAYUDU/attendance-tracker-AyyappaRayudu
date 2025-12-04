import React, { useState, useEffect, useRef } from "react";
import TimeDate from "../components/TimeDate";

// Static employee info
const EMPLOYEE_INFO = {
  employeeId: "EMP001",
  employeeName: "Ayyappa Rayudu",
  department: "Engineering",
  role: "Frontend Developer",
  shiftStart: "09:00:00 AM",
  shiftEnd: "06:00:00 PM",
};

const Attendance = () => {
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("attendanceRecords");
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const today = new Date().toLocaleDateString();
  const initializedRef = useRef(false);

  // Save records to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("attendanceRecords", JSON.stringify(records));
  }, [records]);

  // Create today's record only once
  useEffect(() => {
    if (initializedRef.current) return; // Prevent double call
    initializedRef.current = true;

    const todayRecord = records.find((rec) => rec.date === today);

    if (!todayRecord) {
      setRecords((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          date: today,
          status: "Absent",
          login: "",
          logout: "",
          workingHours: "",
          employeeId: EMPLOYEE_INFO.employeeId,
          employeeName: EMPLOYEE_INFO.employeeName,
          department: EMPLOYEE_INFO.department,
          role: EMPLOYEE_INFO.role,
          shiftStart: EMPLOYEE_INFO.shiftStart,
          shiftEnd: EMPLOYEE_INFO.shiftEnd,
          lateBy: "",
        },
      ]);
    }
  }, [today, records]);

  // Converts "09:00:00 AM" to Date object
  const parseTimeToDate = (timeStr) => {
    if (!timeStr) return null;
    const parts = timeStr.split(" ");
    const time = parts[0];
    const ampm = parts[1];
    const [hh, mm, ss] = time.split(":").map(Number);
    let hour = hh % 12;
    if (ampm === "PM") hour += 12;

    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, mm, ss);
  };

  const formatDuration = (ms) => {
    if (ms <= 0) return "";
    const hrs = Math.floor(ms / 3600000);
    const mins = Math.floor((ms % 3600000) / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const computeLateBy = (login, shiftStart) => {
    const loginDate = parseTimeToDate(login);
    const shiftDate = parseTimeToDate(shiftStart);
    if (!loginDate || !shiftDate) return "";
    const diff = loginDate - shiftDate;
    return diff <= 0 ? "On time" : formatDuration(diff);
  };

  const calculateWorkingHours = (login, logout) => {
    const loginDate = parseTimeToDate(login);
    const logoutDate = parseTimeToDate(logout);
    if (!loginDate || !logoutDate) return "";
    return formatDuration(logoutDate - loginDate);
  };

  const handleLogin = () => {
    const loginTime = new Date().toLocaleTimeString();

    setRecords((prev) =>
      prev.map((rec) =>
        rec.date === today
          ? {
              ...rec,
              status: "Present",
              login: loginTime,
              lateBy: computeLateBy(loginTime, rec.shiftStart),
            }
          : rec
      )
    );

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    const logoutTime = new Date().toLocaleTimeString();

    setRecords((prev) =>
      prev.map((rec) =>
        rec.date === today
          ? {
              ...rec,
              logout: logoutTime,
              workingHours: calculateWorkingHours(rec.login, logoutTime),
            }
          : rec
      )
    );

    setIsLoggedIn(false);
  };

  const totalPresent = records.filter((r) => r.status === "Present").length;
  const totalAbsent = records.filter((r) => r.status === "Absent").length;

  const totalWorkedMs = records.reduce((acc, r) => {
    if (r.login && r.logout) {
      const loginDate = parseTimeToDate(r.login);
      const logoutDate = parseTimeToDate(r.logout);
      if (loginDate && logoutDate) return acc + (logoutDate - loginDate);
    }
    return acc;
  }, 0);

  const totalWorkedFormatted = formatDuration(totalWorkedMs);

  return (
    <div className="container p-2" style={{ background: "white", color: "black" }}>
      <div className="p-3 border mb-4">
        <TimeDate />

        <div className="mt-2 mb-3">
          <strong>{EMPLOYEE_INFO.employeeName}</strong> | ID: {EMPLOYEE_INFO.employeeId} |{" "}
          {EMPLOYEE_INFO.department} - {EMPLOYEE_INFO.role}
        </div>

        <div className="mt-3 d-flex gap-3">
          {!isLoggedIn ? (
            <button className="btn btn-dark" onClick={handleLogin}>
              Login
            </button>
          ) : (
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>

      <div className="border p-3 mb-4">
        <h5>Monthly Attendance Report</h5>
        <p><strong>Present:</strong> {totalPresent}</p>
        <p><strong>Absent:</strong> {totalAbsent}</p>
        <p><strong>Total Worked:</strong> {totalWorkedFormatted}</p>
      </div>

      <div className="border p-3">
        <h5>Attendance Records</h5>

        <table className="table table-bordered text-center mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Name</th>
              <th>Dept</th>
              <th>Role</th>
              <th>Shift</th>
              <th>Status</th>
              <th>Login</th>
              <th>Logout</th>
              <th>Late By</th>
              <th>Working Hours</th>
            </tr>
          </thead>

          <tbody>
            {records.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.date}</td>
                <td>{rec.employeeId}</td>
                <td>{rec.employeeName}</td>
                <td>{rec.department}</td>
                <td>{rec.role}</td>
                <td>{rec.shiftStart} - {rec.shiftEnd}</td>
                <td style={{ color: rec.status === "Present" ? "green" : "red" }}>
                  {rec.status}
                </td>
                <td>{rec.login || "---"}</td>
                <td>{rec.logout || "---"}</td>
                <td style={{ color: rec.lateBy !== "On time" ? "orange" : "black" }}>
                  {rec.lateBy || "---"}
                </td>
                <td>{rec.workingHours || "---"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
