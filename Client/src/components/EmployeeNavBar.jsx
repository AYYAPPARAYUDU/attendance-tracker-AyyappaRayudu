import React from 'react'
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import "../styles/EmployeeNavBar.css"

const EmployeeNavBar = () => {
  return (
      <>
          <div className="nav  ps-5 pe-5  d-flex justify-content-between align-items-center">
            <div className='d-flex justify-content-between align-items-center gap-5 '>
              <h1>PrepHire</h1>

              <div className="search-bar border d-flex align-items-center justify-content-center ms-5">
                  <button type='submit' className='border-0 search-icon'><IoSearchOutline /></button>
                  <input type="text" className='border-0 search-input'/>
              </div>
              </div>

            <div className='d-flex gap-3'>
              <div className="icons fs-5  d-flex align-items-center gap-3 me-4">
                   <Link to={""} className=''><span className='notification-icon border p-1 rounded d-flex align-items-center'><FiBell /></span></Link> 
                    <Link to={""} className=''><span className='message-icon border p-1 rounded d-flex align-items-center'><LuMessageCircle /></span></Link>

              </div>
              <div className="profile-section d-flex align-items-center gap-2 me-3 justify-content-around p-2">
                  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-pic" className='profile-pic' />
                  <span className='d-flex flex-column profile-data'>
                      <span className='profile-name fs-5'>Ayyappa</span>
                      <span className="profile-role ">Developer</span>
                  </span>
                </div>
                </div>


          </div>
          
          
      </>
  )
}

export default EmployeeNavBar
