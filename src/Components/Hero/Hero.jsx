import React from "react";
import "./Hero.css";
import gc from "../../Assets/gc.png";
import nep from "../../Assets/nep.png";
import pitb from "../../Assets/pitb.png";
import see from "../../Assets/see.png";
import hero from "../../Assets/hero.webp";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div>

        <h2>Looking for dream internship?</h2>
        <h3>Gain hands on experience</h3>
        <p className="hero-p">
          Internee.pk kickstart student's tech careers with
          first internships, providing industry exposure,
          practical skills, and networking opportunities,
          paving the way for their success in the tech
          industry.
        </p>

        {[gc, nep, pitb, see].map((e) => {
          return (
            <img src={e} alt="" className="hero-left-img" />
          );
        })}
        <div className="hero-left-btns">
          <div>
            <button
              class="job-portal btn-outline-success"
              type="submit"
            >
              Job Portal
            </button>
            <p className="hero-btn">Get latest job updates</p>
          </div>
          <div>
            <button
              class="lms btn-outline-success"
              type="submit"
            >
              Our LMS
            </button>
            <p className="hero-btn">90% courses are in urdu</p>
          </div>
        </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
