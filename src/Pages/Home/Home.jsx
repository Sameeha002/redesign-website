import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import Internee from '../../Components/WhoIsInternee/Internee'
import Internship from '../../Components/Internships/Internship'
import Blog from '../../Components/Blog/Blog'
import Footer from '../../Components/Footer/Footer'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Task from '../../Components/Task Portal/Task'

const Home = () => {
  return (
    <div>
      <Hero />
      <Internee />
      <Internship />
      <button className='browse-internship'>Browse more Internships</button>
      <Blog />
      <Task />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
