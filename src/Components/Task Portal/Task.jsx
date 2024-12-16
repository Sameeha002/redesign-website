import React from 'react'
import "./Task.css"
import taskportal from "../../Assets/taskportal.webp"

const Task = () => {
  return (
    <div className='task-portal-container'>
      <div className="task-portal-image">
        <img src={taskportal} alt='' />
      </div>
      <div className="task-portal-text">
        <h6>Our own task portal</h6>
        <h2>Manage Project Via<br /> Own Task Portal</h2>
        <p>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</p>
        <div className="tasks-grid">
        
            <p><b>Hands on Projects</b> we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.</p>

            <p><b>How to represent yourself</b> More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.</p>

            <p><b>SDLC Techniques</b> Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.</p>

            <p><b>Easy to understand</b> Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.</p>
        </div>
      </div>
    </div>
  )
}

export default Task
