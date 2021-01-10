import { FaHamburger, FaTimes} from "react-icons/fa";

export function RightNav(props){
    return(
        <ul className="list-unstyled">
        <li>
            {<FaHamburger open={props.state} onClick={() => props.setDropdownOpen(!props.state)} className= {props.state ? "hamburger" : "hamburger active"}/>}
        </li>
        <li>
            {<FaTimes onClick={() => props.setDropdownOpen(!props.state)} className= {props.state ? "cross" : "cross active"}/>}
        </li>
        <li className= {props.state ? "hamburger-link" : "hamburger-link active"}>
          <a href="./Vishank_Rughwani_Resume.pdf" className="hamburger-link">Resume</a>
        </li>
        <li className= {props.state ? "hamburger-link" : "hamburger-link active"}>
          <a href="https://github.com/vishankrug" className="hamburger-link">GitHub</a>
        </li>
        <li className= {props.state ? "hamburger-link" : "hamburger-link active"}>
          <a href="https://www.linkedin.com/in/vishank-rughwani/" className="hamburger-link">LinkedIn</a>
        </li>
        <li className= {props.state ? "hamburger-link" : "hamburger-link active"}>
          <a href="mailto:vishankr@uw.edu" className="hamburger-link">Email</a>
        </li>
      </ul> 
    )
}