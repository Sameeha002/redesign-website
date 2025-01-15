import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram-new.png"
import linkedin from "../../Assets/linkedin.png"
import twitter from "../../Assets/twitter.png"

const Footer = () => {
  return (
    <div className="footer-conatiner">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-link-company">
        <h6>Company</h6>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
      <div className="footer-link-gethelp">
        <h6>Get Help</h6>   
        <p>Training videos</p>
        <p>Request Help</p>
      </div>
      <div className="footer-link-sociliaze">
        <h6>Socialize with us</h6>
        <img src={facebook} alt="facebook"/>
        <img src={linkedin} alt="linkedIn"/>
        <img src={instagram} alt="Instagram"/>
        <img src={twitter} alt="Twitter"/>
        <p>Copyright &copy;2024 internee.pk</p>
        <p>All Rights Reserved.</p>
      </div>
      
    </div>
  );
};

export default Footer;
