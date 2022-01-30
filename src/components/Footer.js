import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import common from "../strings";
function Footer() {
  return (
    <div className="footer">
      <text className="footerText">
        Designed and Developed by Bhawana Shanker
      </text>
      <div className="socialIcon">
        <a
          href={common.linkedInUrl}
          style={{ color: "white", padding: 20 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={common.facebookUrl}
          style={{ color: "white", padding: 20 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href={common.instagramUrl}
          style={{ color: "white", padding: 20 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href={common.githubUrl}
          style={{ color: "white", padding: 20 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
