import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";

function AboutMe () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.about_me;
  uICtx.functions.setPageTitle(pageContent.header);
  return (
      <div>About Me</div>
  );
}
export default AboutMe;