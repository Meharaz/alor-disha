import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Works from "../Pages/Works/Works";
import Gallery from "../Pages/Gallary/Gallary";
import JoinUs from "../Pages/JoinUs/JoinUs";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/Contact/ContactUs";


  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        }
        ,
        {
          path: "/works",
          element: <Works/>
        }
        ,
        {
          path: "/gallary",
          element: <Gallery/>
        }
        ,
        {
          path: "/join-us",
          element: <JoinUs/>
        }
        ,
        {
          path: "/blogs",
          element: <Blog/>
        }
        ,
        {
          path: "/contact",
          element: <ContactUs/>
        }
      ]
    },
  ]);