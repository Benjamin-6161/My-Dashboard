import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

function ProjectCard(props){
  return(
    <div className="project-card-container">
      <img src={props.image}
      className="project-image"
      alt={`${props.name} logo`}/>
      <h2>{props.name}</h2>
      
      <div className="project-link-div"
      style={{marginRight: "8px"}}>
        <FaGlobe />
        <p><a href={props.link || "/"}>{props.link.trim() ? "Link to site" : "Not Hosted yet"}</a></p>
      </div>
      
      <div className="project-link-div">
        <FaGithub/>
        <p ><a href={props.repo}>Github repo</a></p>
      </div>
    </div>
    );
}

export default ProjectCard;