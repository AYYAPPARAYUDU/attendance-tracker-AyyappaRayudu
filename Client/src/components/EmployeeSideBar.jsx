import React from 'react'
import "../styles/EmployeeSideBar.css"
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineTask } from "react-icons/md";
import { SiCodeproject } from "react-icons/si";
import { GrTask } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import {Link } from "react-router-dom";

const EmployeeSideBar = ({ setCurrentPage }) => {
  return (
    <div className="sidebar container employee-sidebar d-flex flex-column justify-content-around border shadow" >

      <div className="nav-links d-flex flex-column gap-3 m-2">

        <div className='link shadow' onClick={() => setCurrentPage("dashboard")}>
          <MdSpaceDashboard /> Dashboard
        </div>

        <div className='link shadow' onClick={() => setCurrentPage("projects")}>
          <SiCodeproject /> Projects
        </div>

        <div className='link shadow' onClick={() => setCurrentPage("attendance")}>
          <GrTask /> Attendance
        </div>

        <div className='link shadow' onClick={() => setCurrentPage("tasks")}>
          <MdOutlineTask /> Task Board
        </div>

      </div>

      <div className="nav-footer d-flex flex-column gap-2 m-2 p-3 border-top">
       
        <div className='link' onClick={() => setCurrentPage("settings")}>
          <IoIosSettings /> Settings
        </div>

      <Link to={"/login"} className='Link'>  <div className='link'>
          
          <LuLogOut /> Logout
        </div></Link>

      </div>

    </div>
  )
}

export default EmployeeSideBar;
