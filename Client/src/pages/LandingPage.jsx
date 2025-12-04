import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div style={{ background: "white", color: "black" }}>
      
      {/* HERO SECTION */}
      <section className="text-center p-5 border-bottom">
        <h1 className="fw-bold">Employee Management & Task Monitoring System</h1>
        <p className="mt-3 fs-5">
          A simple and efficient platform for attendance tracking, task management,
          project monitoring, and workflow updates.
        </p>
        
        <Link to="/login">
          <button className="btn btn-dark btn-lg mt-3">
            Login
          </button>
        </Link>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="container mt-4">
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img 
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
                className="d-block w-100 rounded"
                alt="team"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Smart Attendance Tracking</h5>
                <p>Monitor login/logout & working hours with ease.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                className="d-block w-100 rounded"
                alt="tasks"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Task Workflow System</h5>
                <p>Track your task progress from To-Do to Completed.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1499914485622-a88fac536970"
                className="d-block w-100 rounded"
                alt="projects"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Project Management</h5>
                <p>Organize, monitor, and manage all team projects in one place.</p>
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container text-center mt-5 mb-5">
        <h2 className="fw-semibold">Platform Features</h2>
        <p className="text-muted">Simple and powerful tools for employees and admins.</p>

        <div className="row mt-4">

          <div className="col-md-4 p-3">
            <h5>✔ Attendance Tracking</h5>
            <p>Daily login/logout and working hours automatically recorded.</p>
          </div>

          <div className="col-md-4 p-3">
            <h5>✔ Task Workflow Board</h5>
            <p>Move tasks through stages: To Do → Completed.</p>
          </div>

          <div className="col-md-4 p-3">
            <h5>✔ Project Dashboard</h5>
            <p>Track project deadlines, members, and status.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-3 border-top">
        <p className="m-0">© 2025 Employee Management System</p>
      </footer>

    </div>
  );
};

export default LandingPage;
