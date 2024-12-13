import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import Internee from '../../Components/WhoIsInternee/Internee'
import Internship from '../../Components/Internships/Internship'

const Home = () => {
  return (
    <div>
      <Hero />
      <Internee />
      <Internship />
      <button className='browse-internship'>Browse more Internships</button>
      
    </div>
  )
}

export default Home
