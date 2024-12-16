import React from 'react'
import './Internee.css'
import interneeIcon from "../../Assets/interneeIcon.jpg"

const Internee = () => {
  return (
    <div className='whoisinternee-container'>
      <div className="icon">
        <img src={interneeIcon} alt=''/>
      </div>
      <div className="internee">
        <h1>Who is internee.pk?</h1>
      </div>
      <div className="internee-text">
        <p>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
      </div>
      <div className="internee-link">
        <p>⋆✴︎˚｡⋆ Click Below ang grab your internship ⋆✴︎˚｡⋆</p>
      </div>
    </div>
  )
}

export default Internee
