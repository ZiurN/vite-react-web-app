import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";

function NotFound () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.not_found;
  uICtx.functions.setPageTitle(pageContent.header);
  return (
    <div>NOT FOUND</div>
  );
}
export default NotFound;