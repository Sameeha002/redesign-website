import React from "react";
import "./Internship.css";
import appdev from "../../Assets/appdev.jpg";
import backendDevelopment from "../../Assets/backendDevelopment.png";
import chatbotdev from "../../Assets/chatbotdev.jpg";
import frontenddev from "../../Assets/frontenddev.jpg";

const Internship = () => {
  return (
    <div className="internship-container">
      <div className="card-grid1">
        <div className=" tag tag1">Internship</div>
        <div className="card-container">
          <div className="card" >
            <div className="card-front">

            <img className="card-img-top" src={appdev} alt="" />
            <div className="card-body">
              <p className="card-text">App Development</p>
            </div>
            </div>

            <div className="card-back">
              <h5>App Development</h5>
              <p>Build innovative mobile applications using latest tools and frameworks</p>
              <button>Apply now</button>
            </div>
          </div>
          <div className="card" >
            <img
              className="card-img-top"
              src={backendDevelopment}
              alt=""
            />
            <div className="card-body">
              <p className="card-text">Backend Development</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-grid2">
        <div className="card-container">
          <div className="card">
            <img
              className="card-img-top"
              src={chatbotdev}
              alt=""
            />
            <div className="card-body">
              <p className="card-text">Chatbot Development</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={frontenddev}
              alt=""
            />
            <div className="card-body">
              <p className="card-text">Front-end Development</p>
            </div>
          </div>
        </div>

        <div className="tag tag2">Every Month</div>
      </div>
    </div>
  );
};

export default Internship;
