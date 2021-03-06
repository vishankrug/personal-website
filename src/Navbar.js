import React, { useState } from 'react';
import { RightNav } from './RightNav';
import { FaGithub, FaLinkedin, FaRegAddressCard } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export function NavBar(){
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () =>{
      if(window.scrollY >= 150){
          setNavbar(true);
      } else {
          setNavbar(false);
      }
  }

  const[dropdownOpen, setDropdownOpen] = useState(false);

  window.addEventListener('scroll', changeBackground);

  return(
    <div className={navbar ? 'navbar-flex active' : 'navbar-flex'}>
      <div className="navbar-child-a mx-2 navbar-navlink">
        <p className="navbarVR">VR</p>
      </div>
      <div className="navbar-child-b mx-2">
        <RightNav state={dropdownOpen} setDropdownOpen={setDropdownOpen}/>
        <ul className="list-unstyled">
        <li className="navbar-list navbar-navlink">
          <a href="./Vishank_Rughwani_Resume.pdf">{<FaRegAddressCard className="navbarIcon"/>}</a>
        </li>
        <li className="navbar-list navbar-navlink">
          <a href="https://github.com/vishankrug">{<FaGithub className="navbarIcon" />}</a>
        </li>
        <li className="navbar-list navbar-navlink">
          <a href="https://www.linkedin.com/in/vishank-rughwani/">{<FaLinkedin className="navbarIcon"/>}</a>
        </li>
        <li className="navbar-list navbar-navlink">
          <a href="mailto:vishankr@uw.edu">{<FiMail className="navbarIcon"/>}</a>
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
      <p className="ml-5">Copyright &copy; 2021 Vishank Rughwani 👨🏽‍💻 </p>
    </div>
  )
}
