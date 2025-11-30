import "./Socials.css";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Socials(){
  return(
    <div className="socials-container">
      
      <a className="socials-button"
      href="https://www.facebook.com/share/1A54vrEatr/"
      target="_blank"
      ><FaFacebook size={25}/></a>
      
      <a className="socials-button"
      href="https://wa.me/2347070097579"
      target="_blank"
      ><FaWhatsapp size={25}/></a>
      
      <a className="socials-button"
      href="https://x.com/NonsoMON6161?t=rKeu5m5aGUN5122M6CHF1A&s=09"
      target="_blank"
      ><FaTwitter size={25}/></a>
      
      <a className="socials-button"
      href="https://github.com/Benjamin-6161"
      target="_blank"
      ><FaGithub size={25}/></a>
      
    </div>
    );
}

export default Socials;