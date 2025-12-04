import React from 'react'
import {useState,useEffect} from "react";

const TimeDate = () => {
    const [time,setTime]=useState(new Date());

    useEffect(()=>{

        const timer=setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>clearInterval(timer);

    },[]);

  return (
    
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
      <h2>{time.toLocaleDateString()}</h2>
    </div>
  )
}

export default TimeDate
