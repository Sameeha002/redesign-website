import React from "react";
import './Navbar.css'
import logo from '../../Assets/logo.png'
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container-fluid">
          <img class="navbar-logo" alt="" src={logo}/>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Internship
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Company Collaboration
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              
            </ul>
            <div className="icons">

              <Searchbar />

              <button class="btn btn-outline-success" type="submit">Job Portal</button>
              <button class="btn btn-outline-success" type="submit">Internee's Login</button>
            </div>
              
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
