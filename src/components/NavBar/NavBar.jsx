import "./NavBar.css"
import {useNavigate} from "react-router-dom";

function NavBar(){
  const navigate = useNavigate();
  
  return(
    <nav className="navbar">

      <label htmlFor="nav-toggle" className="nav-toggle-label">
        Go To...
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>

       <input type="checkbox" id="nav-toggle" className="nav-toggle" />
       
      <ul className="nav-links">
        <li onClick={()=> navigate("/")}>Home</li>
        {/*<li onClick={()=> navigate("projects")}>Projects</li>*/}
      </ul>
    </nav>
    );
}

export default NavBar;