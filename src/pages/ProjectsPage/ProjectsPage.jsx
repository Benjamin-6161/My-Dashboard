import "./ProjectsPage.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";

import FadeInSection from "../../utils/FadeInSection.jsx"

function ProjectsPage(){
  const projects = [
    {name: "Quizit", repo: "https://github.com/Benjamin-6161/Quizit", link: "https://quizit-frontend.onrender.com/", image: "logos/quizit.png"},
    {name: "MarketMix", repo: "https://github.com/Benjamin-6161/MarketMix", link: "", image: "logos/marketmix.jpg"}
    /*{name: "AllMart", repo: "https://github.com/Benjamin-6161/all-mart", link: "", image: "logos/allmart.jpg"},
    {name: "ProfileMobile", repo: "https://github.com/Benjamin-6161/springboot-and-androidStudio-mobile-app", link: "", image: "placeholder.jpeg"}*/
    ];
  
  return(
    <div>
      <h1>Projects</h1>
      {projects.map(
      (p) => <FadeInSection><ProjectCard
      name = {p.name}
      link = {p.link}
      repo = {p.repo}
      image = {p.image}
      /></FadeInSection>
      )}
    </div>
    );
}

export default ProjectsPage;