import React from "react";

const EmployeeProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Attendance Management System",
      description: "Build employee attendance with login/logout & working hours",
      deadline: "2025-02-20",
      team: ["Ayyappa", "Ramesh"],
      status: "In Progress"
    },
    {
      id: 2,
      name: "Task Management Dashboard",
      description: "Admin assigns tasks, employees update progress",
      deadline: "2025-03-10",
      team: ["Ayyappa"],
      status: "Not Started"
    }
  ];

  return (
    <div className="container p-4">
      <h3>Employee Projects</h3>

      <div className="mt-3 row">
        {projects.map((p) => (
          <div className="col-md-6 mb-3" key={p.id}>
            <div className="card p-3 border">
              <h5>{p.name}</h5>
              <p>{p.description}</p>
              <p><b>Deadline:</b> {p.deadline}</p>
              <p><b>Team:</b> {p.team.join(", ")}</p>
              <span className="badge bg-dark">{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeProjects;
