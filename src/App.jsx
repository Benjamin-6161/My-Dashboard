import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import {useEffect} from "react";

/*UTILS*/
import FadeInSection from "./utils/FadeInSection.jsx"
import ComponentsTest from "./utils/ComponentsTest.jsx"
import {createStars, createShootingStar} from "./utils/StarGenerator.js"
/*UTILS*/

/* COMPONENTS  */
import Name from "./components/Name/Name.jsx"
import Socials from "./components/Socials/Socials.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
/* COMPONENTS */

/*PAGES*/
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
/*PAGES*/

function RootLayout() {
  const location = useLocation();
  
  useEffect(() => {
    createStars(200);
    createShootingStar();
    createShootingStar();
  },[location]);
  
  return (
    <>
      <div className = "page">
        <div className="main">
          <Socials/>
          <Name/>
          <NavBar/>
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
}


function App(){
  
  const router = createBrowserRouter([
    {
      path: "*",
      element: <RootLayout/>,
      children: [
        {path: "test", element: <ComponentsTest/>},
        /*{path: "projects", element: <ProjectsPage/>},*/
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    );
}

export default App;