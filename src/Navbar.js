import React from 'react';
import './App.css';


export function NavBar(){

  return(
    
    <div className="navbar-flex">
      <div className="navbar-child-a mx-2 navbar-navlink">
        Huskler
      </div>

      <div className="navbar-child-b mx-2">
        <ul className="list-unstyled">
          <li className="navbar-list navbar-navlink">
           GitHub
          </li>
          <li className="navbar-list navbar-navlink">
            LinkedIn
          </li>
          <li className="navbar-list navbar-navlink">
            Resume
          </li>
          <li className="navbar-list navbar-navlink">
            email
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
      <p className="ml-5">Copyright &copy; 2020 Vishank Rughwani. All rights reserved.  </p>
    </div>
  )
}
