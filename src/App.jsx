import { useContext, useEffect, useState } from "react";
import { UiContext } from "./contexts/uiContext";
import { LangContext } from "./contexts/langContext";
import "./styles/index.sass";

function App() {
  const [pageTitle, setPageTitle] = useState('Jeferson Ruiz');
  const uiCtx = useContext(UiContext);
  const langCtx = useContext(LangContext);
  const reactNavigate = uiCtx.reactNavigate;
  const pages = uiCtx.pages;
  const components = uiCtx.components;
  const setPageTitleInPage = (title) => {
	title = title.length === 0 || title.includes("000")
      ? "Jeferson Ruiz"
      : title;
    document.title = title;
    setPageTitle(title);
  }
  let classes = "appContainer";
  classes = !langCtx.languageCharged ? classes + " spinner": classes;
  return (
    <div className={classes} >
      <components.Header title={pageTitle}></components.Header>
      <components.NavMenu />
      {langCtx.languageCharged &&
        <reactNavigate.Routes>
        <reactNavigate.Route path="/" element={<pages.Home />} />
        <reactNavigate.Route path="/about-me" element={<pages.AboutMe setPageTitle={setPageTitleInPage}/>} />
        <reactNavigate.Route path="/curriculum" element={<pages.Cv setPageTitle={setPageTitleInPage}/>} />
        <reactNavigate.Route path="/design-projects" element={<pages.DesignProjects setPageTitle={setPageTitleInPage}/>} />
        <reactNavigate.Route path="/web-projects" element={<pages.WebProjects setPageTitle={setPageTitleInPage}/>} />
        <reactNavigate.Route path="/blog" element={<pages.Blog setPageTitle={setPageTitleInPage}/>} />
        <reactNavigate.Route path="/photography" element={<pages.Photography setPageTitle={setPageTitleInPage}/>} />
        <reactNavigate.Route path="*" element={<pages.NotFound />} />
        </reactNavigate.Routes>
      }
      {!langCtx.languageCharged &&
        <components.ZiurLogo></components.ZiurLogo>
      }
      <components.Footer></components.Footer>
    </div>
  );
}
export default App;