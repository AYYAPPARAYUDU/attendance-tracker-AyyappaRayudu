import React, { useState } from "react";

const workflow = [
  "To Do",
  "In Progress",
  "In Testing",
  "Ready for Deployment",
  "Completed"
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "API Integration",
      description: "Integrate backend attendance API",
      priority: "High",
      dueDate: "2025-02-15",
      assignedTo: "Ayyappa Rayudu",
      status: "To Do"
    }
  ]);

  const moveStatus = (id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id
          ? {
              ...t,
              status: workflow[(workflow.indexOf(t.status) + 1) % workflow.length]
            }
          : t
      )
    );
  };

  return (
    <div className="container p-4">
      <h3>Employee Task Board</h3>

      <div className="row mt-3">
        {tasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-3">
            <div className="card p-3 border">

              <h5>{task.title}</h5>
              <p className="m-0">{task.description}</p>
              <p className="m-0"><b>Priority:</b> {task.priority}</p>
              <p className="m-0"><b>Due:</b> {task.dueDate}</p>

              <div className="mt-2">
                <span className="badge bg-dark">{task.status}</span>
              </div>

              <button 
                className="btn btn-outline-dark mt-3"
                onClick={() => moveStatus(task.id)}
              >
                Move to Next Stage →
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
