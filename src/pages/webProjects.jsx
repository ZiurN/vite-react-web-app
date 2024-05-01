import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";

function WebProjects () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.web_projects;
  uICtx.functions.setPageTitle(pageContent.header);
  return (
    <div>Web Projects</div>
  );
}
export default WebProjects;