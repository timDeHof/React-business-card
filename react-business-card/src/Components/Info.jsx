import React from "react";
import Me from "../assets/me-final.png";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
const Info = () => {
  return (
    <div className="info">
      <img className="info--me" src={Me} />
      <h1 className="info--fullName">Timothy DeHof</h1>
      <p className="info--jobTitle">FrontEnd Developer</p>
      <div className="info--cta">
        <a className="info--cta_Btn email" href="mailto:ttdehof@gmail.com" target="_blank">
          <MdEmail />
          <span>
          email
          </span>
        </a>
        <a className="info--cta_Btn linkedin" href="https://www.linkedin.com/in/timothy-dehof/" target="_blank">
          <BsLinkedin />
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Info;
