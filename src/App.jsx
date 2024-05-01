import { useContext } from "react";
import { UiContext } from "./contexts/uiContext";
import { LangContext } from "./contexts/langContext";
import "./styles/index.sass";

function App() {
  const uiCtx = useContext(UiContext);
  const langCtx = useContext(LangContext);
  const reactNavigate = uiCtx.reactNavigate;
  const pages = uiCtx.pages;
  const components = uiCtx.components;
  let classes = "appContainer";
  classes = !langCtx.languageCharged ? classes + " spinner": classes;
  return (
    <>
      <main className={classes} >
        <components.Header />
        <components.NavMenu />
        {langCtx.languageCharged &&
          <reactNavigate.Routes>
            <reactNavigate.Route path="/" element={<pages.Home />} />
            <reactNavigate.Route path="/about-me" element={<pages.AboutMe />} />
            <reactNavigate.Route path="/curriculum" element={<pages.Cv />} />
            <reactNavigate.Route path="/design-projects" element={<pages.DesignProjects />} />
            <reactNavigate.Route path="/web-projects" element={<pages.WebProjects />} />
            <reactNavigate.Route path="/blog" element={<pages.Blog />} />
            <reactNavigate.Route path="/photography" element={<pages.Photography />} />
            <reactNavigate.Route path="/salesforce" element={<pages.Salesforce />} />
            <reactNavigate.Route path="*" element={<pages.NotFound />} />
          </reactNavigate.Routes>
        }
        {!langCtx.languageCharged &&
          <components.ZiurLogo></components.ZiurLogo>
        }
        <components.Footer></components.Footer>
      </main>
    </>
  );
}
export default App;