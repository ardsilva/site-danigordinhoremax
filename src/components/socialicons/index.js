import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,

} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.tiktok && (
          <li>
            <a href={socialprofils.tiktok} target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </li>
        )}
      </ul>
      <p>Sigam Me</p>
    </div>
  );
};
