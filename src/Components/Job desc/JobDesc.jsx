import React from 'react'
import './JobDesc.css'

const JobDesc = ({props}) => {
  return (
    <div className='job-desc-container'>
      <div className="job-name">
        <h6>{props.title} - {props.location}</h6>
      </div>
      <div className="jobs-detail">
        <p>{props.type}</p>
        <p>{props.duration}</p>
        <p>{props.time}</p>
      </div>
      <div className="job-time-posted">
        <p>{props.posted}</p>
      </div>
      <button className='apply-now'>Apply Now</button>
    </div>
  )
}

export default JobDesc
