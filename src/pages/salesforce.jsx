import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";

function Salesforce () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.salesforce;
  uICtx.functions.setPageTitle(pageContent.header);
  return (
    <div>Salesforce</div>
  );
}
export default Salesforce;