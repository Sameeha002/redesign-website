import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { auth, db } from "../../Context/firebase";
import { doc, getDoc } from "firebase/firestore";
// import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        console.log(user);
        const docRef = doc(db, "Users", user.uid);
        try {
          const docsnap = await getDoc(docRef); // contains all the details about user id and my collection
          if (docsnap.exists()) {
            setUserDetails(docsnap.data());
            console.log(docsnap.data());
          } else {
            console.log("User is not loggedIn!!");
          }
        } catch (error) {
          console.log("Error fetching user data", error);
        }
      }

      else{
        console.log("No user is logged In!")
        setUserDetails(null);
      }
     
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try{
      await auth.signOut();
      window.location.href = "/login"
      console.log("User logged out Sucessfully!");
      toast.success("User logged out Sucessfully!",{
        position: "top-center"
      });
    }
    catch(error){
      console.log("Error logging out", error.message)
    }
  }
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img className="navbar-logo" alt="" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Internship</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                Company Collaboration
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact Us</Link>
            </li>
          </ul>
          <div className="icons">
            <Searchbar />
            <Link to="/Job-Portal">
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Job Portal
              </button>
            </Link>
            <div>
              {userDetails ? (
                <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userDetails.name || "User"}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <span className="dropdown-item">
                      Hey {userDetails.name}!!
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item">
                      Account Information
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item">
                     Settings
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
              ) : (
                <>
                  <Link to="/login">
                    <button
                      className="btn btn-outline-success"
                      type="submit"
                    >
                      Internee's Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
