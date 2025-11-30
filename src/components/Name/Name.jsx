import "./Name.css";
import React, {useEffect, useState} from "react";

function Name(){
  const [font, setFont] = useState(0);
  const [fade, setFade] = useState(false);
  const fonts = ["cursive", "Georgia", "cursive", "Monospace"];
  
  useEffect(() => {
    let i = -1;
    
    const intervalId = setInterval(() => {
      if (i >= fonts.length - 1){
        clearInterval(intervalId);
        setFade(false);
        setFont(i);
        return;
      }
      setFade(true);
      setTimeout(() => {
        i++;
        setFont(i);
        setFade(false);
      }, 200);
    },500)
    return () => clearInterval(intervalId);
  }, []);

  return(
    <div className="name-container"
    onClick={() => location.reload()}>
      
      {font < 3 && <img 
      className="logo"
      src="logo.jpg"
      style={{opacity: 0}}/>}
      
      {font >= 3 && <img 
      className="logo"
      src="logo.jpg"
      alt="logo"
      style={{animation: "fadein 0.3s ease forwards"}}/>}
      
      <h1 className={`name-text ${fade ? "fade-out": "fade-in"}`} style={{fontFamily: fonts[font]}}>
        {font === 0 && "BEN"}
        {font === 1 && "BENJAM"}
        {font === 2 && "BENJAMIN"}
        {font >= 3 && "BENJAMIN-6161"}
        </h1>
    </div>
    );
}

export default Name;