import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className="flexbox">
  <div className="search">
    
    <div>
      <input type="text" placeholder="Search . . ." required/>
    </div>
  </div>
</div>
  )
}

export default Searchbar
