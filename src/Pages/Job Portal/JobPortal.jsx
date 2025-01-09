import React, { useState } from "react";
import "./JobPortal.css";
import data from "../../Assets/Jobs";
import JobDesc from "../../Components/Job desc/JobDesc";

const JobPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(data);
  const[selectedType, setSelectedType] = useState(data)
  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((job) => job.title.toLowerCase().includes(query));
    setFilteredJobs(filtered)
  }

  const handletypes = (e) => {
   const selectedType = e.target.value;
    setSelectedType(selectedType);

    const typeData = selectedType === "" ? data : data.filter((job) => job.type === selectedType) 
    setFilteredJobs(typeData)
  }
  return (
    <>
    
    <div className="job-portal-container">
      <p> We have 850,000 great job offers you deserve!</p>
      <h2>
        Your Dream
        <br /> Job is Waiting
      </h2>
      <div className="job-filter">
        <p>Discover your next role</p>
        <div className="filter-container">
          <div className="search-input">
            <input
              type="search"
              placeholder="eg. Web Developer"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="category-dropdown">
            <select className="ui search dropdown">
              <option value="">Category</option>
              <option value="WD">Web Development</option>
              <option value="GD">Graphic Designer</option>
              <option value="VE">Video Editing</option>
              <option value="ENS">Enginering & Sciences</option>
              <option value="AI">
                AI Development
              </option>
            </select>
          </div>
          <div className="job-type">
            <select className="ui search dropdown" value={selectedType} onChange={handletypes}>
              <option value="">Type</option>
              <option value="Full-time"  >Full Time</option>
              <option value="Part-time">Part Time</option>
              <option value="I">Internship</option>
              <option value="RJ">Remote Jobs</option>
              <option value="C">Contract</option>
            </select>
          </div>
          <div className="search-button">
            <button>Search</button>
          </div>
        </div>
      </div>

    </div>
    <div className="jobs">
      {filteredJobs.length > 0 ? (

      filteredJobs.map((e) => {
        return (
          <JobDesc 
          key={e.id}
         props={e}
          />
        )

      })
      ) : (
        <p>Not Found</p>
      )}
    </div>
    </>
  );
};

export default JobPortal;
