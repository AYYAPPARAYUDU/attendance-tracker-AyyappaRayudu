import React from 'react'

const DataCard = (props) => {
  return (
    <>
      <div className="datacard bg-light p-3 m-2 rounded-3 d-flex flex-column align-items-start justify-content-center gap-2 flex-grow-1" style={{minWidth:"180px", maxWidth:"250px", height:"100px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"}}>
        <h5>{props.data}</h5>
        <h6>{props.value}</h6>

      </div>
    </>
  )
}

export default DataCard
