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
  const location = reactNavigate.useLocation();
  useEffect(() => {
    let path = location.pathname.replace("/", "").replace("-", " ");
    let title = path.charAt(0).toUpperCase() + path.slice(1);
    title = title.length === 0 || title.includes("000") || location.pathname === "/"
      ? "Jeferson Ruiz"
      : title;
    document.title = title;
    setPageTitle(title);
  }, [location]);
  langCtx.setLanguage();
  if (!langCtx.languageCharged) {
    return (
      <div className="spinner">
        <components.ZiurLogo></components.ZiurLogo>
      </div>
    );
  } else {
    return (
      <div className="appContainer">
		<components.Header title={pageTitle}></components.Header>
			<reactNavigate.Routes>
			<reactNavigate.Route path="/" element={<pages.Home />} />
			<reactNavigate.Route path="/about-me" element={<pages.AboutMe />} />
			<reactNavigate.Route path="/cv" element={<pages.Cv />} />
			<reactNavigate.Route path="/design-projects" element={<pages.DesignProjects />} />
			<reactNavigate.Route path="/web-projects" element={<pages.WebProjects />} />
			<reactNavigate.Route path="/blog" element={<pages.Blog />} />
			<reactNavigate.Route path="/photography" element={<pages.Photography />} />
			<reactNavigate.Route path="*" element={<pages.NotFound />} />
			</reactNavigate.Routes>
		<components.Footer></components.Footer>
      </div>
    );
  }
}
export default App;