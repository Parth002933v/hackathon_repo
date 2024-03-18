


import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Kumbh<span>Navigate</span>
          </h3>

          <p className="footer-links">
            <Link to={"/"} className="link-1">
              Home
            </Link>

            <Link to={"/About"}>About</Link>

            <Link to={"/Contact"}>Contact</Link>
          </p>

          <p className="footer-company-name">Kumbh-navigator © 2024</p>
        </div>

        <div className="footer-center w-full">
          <div className="collage_name">
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Sarvajanik University</span> Shree Ramkrishna Institute of
              Computer Education & Applied Sciences.
            </p>
          </div>

          <div className="wrapper_class">
            <div className="flex mt-4 ml-8 phone_info">
              <FaPhoneAlt className="text-[#fff] mr-2" />

              <p>+123456789</p>
            </div>

            <div className="flex mt-4 ml-8  email_info">
              <IoMdMail className="text-[#fff] mr-2 text-lg" />

              <div>
                <a href="mailto:support@company.com">
                  <span className="text-[#fff] mb-2">abc@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            {/* <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a> */}
          </div>
        </div>
      </footer>
    </div>

    
  );
};

export default Footer;
