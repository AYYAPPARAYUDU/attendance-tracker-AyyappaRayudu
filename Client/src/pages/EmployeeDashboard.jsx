import React from 'react'
import DataCard from '../components/DataCard'
//importing icons 
import { IoMdTime } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import { LiaTimesCircle } from "react-icons/lia";
import { MdViewTimeline } from "react-icons/md";

const EmployeeDashboard = () => {
  return (
    <div>
      <p className='fs-3 ms-3'>Attendance</p>
        <div className="datacards d-flex flex-row flex-wrap flex-grow justify-content-between align-items-center gap-4">
          
         <DataCard  data="Ayyappa" value="Software Developer"  />
         <DataCard  data="Employee ID" value="1118" />
         <DataCard  data="Joining Date" value="03/01/2004"  />
         <DataCard  data="Department" value="Developer"  />

        </div>

        <div className='attendance-container border'>
          <div className='border d-flex flex-row justify-content-between align-items-center p-3'>
            <span className='center'><MdViewTimeline className='display-5 border rounded-5 p-2 mb-3' /> <h4 className='center'>8:00</h4><p>Average WOrking Hour</p></span><hr className='border dark'/>
            <span className='center'><IoMdTime className='display-5 border rounded-5 p-2 mb-3'/> <h4 className='center'>10:00AM</h4><p>Average In Time</p></span><hr />
            <span className='center'> <LiaTimesCircle className='display-5 border rounded-5 p-2 mb-3' /> <h4 className='center'>7:00PM</h4><p>Average Time Out</p></span><hr />
            <span className='center'><GiSandsOfTime className='display-5 border rounded-5 p-2 mb-3'/> <h4 className='center'>1:00</h4><p>Average Break Time</p></span>

          </div>

        </div>
    </div>
  )
}

export default EmployeeDashboard
