import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kolkata,</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              6206550615
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              anandkumarsingh0615@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About myself</h4>
          <p>
            This is me, Anand Kumar Singh, a final-year student, passionate
            about learning and eager to contribute to the world with my
            knowledge and skills
          </p>
          <div className="social">
            <a href="https://github.com/anand0615" target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/anand-kumar-singh-35191b229" target="_blank">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
