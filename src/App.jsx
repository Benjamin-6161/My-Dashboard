import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/*UTILS*/
import FadeInSection from "./utils/FadeInSection.jsx"
import ComponentsTest from "./utils/ComponentsTest.jsx"
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
        {path: "projects", element: <ProjectsPage/>},
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