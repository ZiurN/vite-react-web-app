import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function AboutMe ({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.about_me;
  setPageTitle(pageContent.header);
  return (
      <div>About Me</div>
  );
}
export default AboutMe;