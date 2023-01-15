import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function DesignProjects ({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.design_projects;
  setPageTitle(pageContent.header);
  return (
    <div>Design Projects</div>
  );
}
export default DesignProjects;