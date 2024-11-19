import React from "react";
import "./Footer.css";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  FaPaperPlane,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className=" ft-1">
            <h3>
              {/* <img height={"39.11px"} src="images/logo2.png" alt="logo" /> */}
              <span>BITE</span> & SAVORY
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              nostrum, labore itaque maiores numquam, assumenda alias
              consectetur voluptatibus delectus illo unde facilis ab at ea.
            </p>
            <div className="footer-icon">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaTwitter />
              </a>{" "}
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="ft-2">
            <h5>Our Menu</h5>
            <ul>
              <li className="footer-item">
                <a href="/Breakfast">Breakfast</a>
              </li>
              <li className="footer-item">
                <a href="/lunch">Lunch</a>
              </li>
              <li className="footer-item">
                <a href="/Dinner">Dinner</a>
              </li>
              <li className="footer-item">
                <a href="/Fast food">Fast food</a>
              </li>
            </ul>
          </div>
          <div className="ft-3">
            <h5>Support</h5>
            <ul>
              <li className="footer-item">
                <a href="/Breakfast">Services</a>
              </li>
              <li className="footer-item">
                <a href="/lunch">Help&Support</a>
              </li>
              <li className="footer-item">
                <a href="/Terms&Conditions">Terms&Conditions</a>
              </li>
            </ul>
          </div>
          <div className="ft-4">
            <h5>Contact Info</h5>
            <p>
              <FaPhoneVolume />
              <span style={{ marginLeft: "10px" }}>+91 9600422598</span>
            </p>
            <p>
              <FaEnvelope />
              <span style={{ marginLeft: "10px" }}>
                bite&savory1515@gmail.com
              </span>
            </p>
            <p>
              <FaPaperPlane />
              <span style={{ marginLeft: "10px" }}> Avenue 6th floor,NYC</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-last">
        <p>
          © 2024 Bite & Savory. All Rights Reserved. Unauthorized duplication or
          publication of any materials from this site is expressly prohibited
          without written permission.
        </p>
      </div>
    </>
  );
};
