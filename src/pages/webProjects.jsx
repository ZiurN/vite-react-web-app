import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function WebProjects ({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.web_projects;
  setPageTitle(pageContent.header);
  return (
    <div>Web Projects</div>
  );
}
export default WebProjects;