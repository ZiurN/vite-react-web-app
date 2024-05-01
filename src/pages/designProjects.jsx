import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";

function DesignProjects () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.design_projects;
  uICtx.functions.setPageTitle(pageContent.header);
  return (
    <div>Design Projects</div>
  );
}
export default DesignProjects;