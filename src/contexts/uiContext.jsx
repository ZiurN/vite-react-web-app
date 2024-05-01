import { createContext, useState, useEffect, useRef } from "react";
import { Route, Routes, useLocation, Link, useNavigate, Navigate } from "react-router-dom";
/** UI Custom Pages */
import AboutMe from '../pages/aboutMe';
import Blog from '../pages/blog';
import Cv from '../pages/cv';
import DesignProjects from '../pages/designProjects';
import WebProjects from '../pages/webProjects';
import Home from '../pages/home';
import Photography from '../pages/photography';
import Salesforce from '../pages/salesforce';
import NotFound from '../pages/notFound';
/** UI Custom Components */
import ZiurLogo from '../components/ziurLogo';
import Header from '../components/header';
import Footer from '../components/footer';
import NavMenu from '../components/navMenu';
import DynamicBackGround from '../components/dynamicBackGround';

const UiContext = createContext();

const UiContextProvider = ({ children }) => {
  const [pageTitle, setTitle] = useState('Jeferson Ruiz');
  const bgRef = useRef();
  useEffect(() => {
    let title = pageTitle;
    title = title.length === 0 || title.includes("000")
      ? "Jeferson Ruiz"
      : title;
    document.title = title;
  },[pageTitle]);
  const setPageTitle = (title) => {
    setTimeout(() => {setTitle(title)}, 100);
  }
   const notifyPageHasChanged = () => {
    bgRef.current.setAccelerationFromOutSide()
  }
  const contextValue = {
    pages: {
      AboutMe,
      Blog,
      Cv,
      DesignProjects,
      WebProjects,
      Home,
      Photography,
      Salesforce,
      NotFound
    },
    components: {
      ZiurLogo,
      Header,
      Footer,
      NavMenu,
      DynamicBackGround
    },
    reactNavigate: {
      Route,
      Routes,
      useLocation,
      Link,
      useNavigate,
      Navigate
    },
    functions: {
      setPageTitle,
      notifyPageHasChanged
    },
    properties: {
      pageTitle
    }
  };
  return (
    <UiContext.Provider value={contextValue}>
      <DynamicBackGround ref={bgRef}/>
      {children}
    </UiContext.Provider>
  );
}

export { UiContextProvider, UiContext }