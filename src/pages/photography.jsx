import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";

function Photography () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.photography;
  uICtx.functions.setPageTitle(pageContent.header);
  return (
    <div>Photography</div>
  );
}
export default Photography;