import { createContext } from "react";
import { Route, Routes, useLocation, Link, useNavigate, Navigate } from "react-router-dom";
/** UI Custom Pages */
import AboutMe from '../pages/aboutMe';
import Blog from '../pages/blog';
import Cv from '../pages/cv';
import DesignProjects from '../pages/designProjects';
import WebProjects from '../pages/webProjects';
import Home from '../pages/home';
import Photography from '../pages/photography';
import NotFound from '../pages/notFound';
/** UI Custom Components */
import ZiurLogo from '../components/ziurLogo';
import Header from '../components/header';
import Footer from '../components/footer';
import NavMenu from '../components/navMenu';

const UiContext = createContext();

const UiContextProvider = ({ children }) => {
  const contextValue = {
    pages: {
      AboutMe,
      Blog,
      Cv,
      DesignProjects,
      WebProjects,
      Home,
      Photography,
      NotFound
    },
    components: {
      ZiurLogo,
      Header,
      Footer,
      NavMenu
    },
    reactNavigate: {
      Route,
      Routes,
      useLocation,
      Link,
      useNavigate,
      Navigate
    }
  };
  return (
    <UiContext.Provider value={contextValue}>
      {children}
    </UiContext.Provider>
  );
}

export { UiContextProvider, UiContext }