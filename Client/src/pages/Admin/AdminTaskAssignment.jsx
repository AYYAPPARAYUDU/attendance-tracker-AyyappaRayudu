import React, { useState } from "react";

const AdminTaskAssign = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    assignedTo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    if (!form.title || !form.assignedTo || !form.dueDate) return alert("Fill all fields!");

    const newTask = {
      id: tasks.length + 1,
      ...form,
      status: "To Do",
      createdAt: new Date().toLocaleString(),
    };

    setTasks([...tasks, newTask]);
    setForm({ title: "", description: "", priority: "Medium", dueDate: "", assignedTo: "" });
  };

  return (
    <div className="container p-4">
      <h3>Admin Task Assignment</h3>

      <div className="border p-3 mb-4">
        <h5>Create New Task</h5>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="form-control mb-2"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="form-control mb-2"
          placeholder="Task Description"
          value={form.description}
          onChange={handleChange}
        />

        <select name="priority" className="form-control mb-2" value={form.priority} onChange={handleChange}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input 
          type="date" 
          name="dueDate" 
          className="form-control mb-2"
          value={form.dueDate}
          onChange={handleChange}
        />

        <input
          type="text"
          name="assignedTo"
          placeholder="Assign To (Employee Name)"
          className="form-control mb-2"
          value={form.assignedTo}
          onChange={handleChange}
        />

        <button className="btn btn-dark" onClick={handleAddTask}>
          Assign Task
        </button>
      </div>

      <h5>Assigned Tasks</h5>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>{t.priority}</td>
              <td>{t.assignedTo}</td>
              <td>{t.dueDate}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTaskAssign;
