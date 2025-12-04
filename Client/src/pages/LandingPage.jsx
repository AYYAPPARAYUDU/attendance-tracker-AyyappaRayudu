import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* HERO SECTION */}
      <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="hero-title">Employee Management & Task Monitoring System</h1>
        <p className="hero-subtitle">
          A modern platform for Attendance Tracking, Task Workflow, and Project Monitoring.
        </p>

        <Link to="/login">
          <button className="btn btn-dark btn-lg hero-btn">Get Started</button>
        </Link>
      </section>

      {/* CAROUSEL */}
      <section className="container mt-5">
        <div id="mainCarousel" className="carousel slide shadow-lg rounded" data-bs-ride="carousel">

          <div className="carousel-inner rounded">

            <div className="carousel-item active">
              <img 
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
                className="d-block w-100 landing-img"
                alt="Attendance"
              />
              <div className="carousel-caption d-none d-md-block bg-blur">
                <h5>Smart Attendance Tracking</h5>
                <p>Monitor login, logout, and working hours.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                className="d-block w-100 landing-img"
                alt="Tasks"
              />
              <div className="carousel-caption d-none d-md-block bg-blur">
                <h5>Task Workflow Board</h5>
                <p>Track tasks from To-Do to Completion.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1499914485622-a88fac536970"
                className="d-block w-100 landing-img"
                alt="Projects"
              />
              <div className="carousel-caption d-none d-md-block bg-blur">
                <h5>Project Management</h5>
                <p>Organize and monitor team projects efficiently.</p>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section text-center mt-5">
        <h2 className="fw-bold">Why Choose Our Platform?</h2>
        <p className="text-muted">Simple. Powerful. Designed for teams.</p>

        <div className="row mt-4 justify-content-center">

          <div className="col-md-3 feature-card shadow-sm p-4 m-3 rounded">
            <h3 className="feature-icon">🕒</h3>
            <h5>Attendance Tracking</h5>
            <p>Daily work hours tracked with accuracy.</p>
          </div>

          <div className="col-md-3 feature-card shadow-sm p-4 m-3 rounded">
            <h3 className="feature-icon">📋</h3>
            <h5>Task Workflow</h5>
            <p>Manage progress with a clean workflow system.</p>
          </div>

          <div className="col-md-3 feature-card shadow-sm p-4 m-3 rounded">
            <h3 className="feature-icon">📊</h3>
            <h5>Project Dashboard</h5>
            <p>View team activity and project status at a glance.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer text-center mt-5 p-3">
        © 2025 Employee Management System — Built with ❤️ by Ayyappa Rayudu
      </footer>

    </div>
  );
};

export default LandingPage;
