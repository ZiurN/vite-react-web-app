import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function Cv ({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.curriculum;
  setPageTitle(pageContent.header);
  return (
    <div>Cv</div>
  );
}
export default Cv;