import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function Salesforce ({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.salesforce;
  setPageTitle(pageContent.header);
    return (
        <div>Salesforce</div>
    );
}
export default Salesforce;