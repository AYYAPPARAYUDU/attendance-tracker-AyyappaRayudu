import React, { useState } from 'react'

import EmployeeNavBar from '../components/EmployeeNavBar'
import EmployeeSideBar from '../components/EmployeeSideBar'


import EmployeeDashboard from './EmployeeDashboard'
import Attendance from './Attendance'
import TaskBoard from './TaskBoard'
import Projects from "./Project"

import "../styles/Home.css"


const Home = () => {

  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard": return <EmployeeDashboard />;
    case "attendance": return <Attendance />;
    case "adminTasks": return <AdminTaskAssign />;
    case "tasks": return <TaskBoard />;
    case "projects": return <Projects />;
    case "adminHome": return <AdminHome />;
    case "adminDashboard": return <AdminDashboard />;

    default: return <EmployeeDashboard />;
    }
  };

  return (
    <>
      <EmployeeNavBar className="navbar"/>

      <div className='home row'>
      
        <div className="sidebar col-3 p-0">
          {/* SEND SETCURRENTPAGE TO SIDEBAR */}
          <EmployeeSideBar setCurrentPage={setCurrentPage} />
        </div>

        <div className="main-content col-9 p-4 d-flex flex-column mt-1 gap-2 justify-content-start">
          {renderPage()}
        </div>

      </div>
    </>
  )
}

export default Home;
