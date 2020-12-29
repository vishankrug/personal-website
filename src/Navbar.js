import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export function NavBar(){
  return(
    <div className="navbar-flex">
      <div className="navbar-child-a mx-2 navbar-navlink">
        <p className="navbarVR">VR</p>
      </div>

      <div className="navbar-child-b mx-2">
        <ul className="list-unstyled">
          <li className="navbar-list navbar-navlink">
            {<FaGithub className="navbarIcon"/>}
          </li>
          <li className="navbar-list navbar-navlink">
            {<FaLinkedin className="navbarIcon"/>}
          </li>
          <li className="navbar-list navbar-navlink">
            {<FiMail className="navbarIcon"/>}
          </li>
          <li className="navbar-list navbar-navlink">
            {<FaFileAlt className="navbarIcon"/>}
          </li>
        </ul> 
      </div>
      <div className="navbar-child-c mx-2">
      
      </div>
    </div>

  )
}

export function Footer(){
  return(
    <div className="mt-5">
      <hr></hr>
      <p className="ml-5">Copyright &copy; 2020 Vishank Rughwani 👨🏽‍💻 </p>
    </div>
  )
}
