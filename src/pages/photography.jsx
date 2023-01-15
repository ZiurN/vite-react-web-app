import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function Photography ({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.photography;
  setPageTitle(pageContent.header);
  return (
    <div>Photography</div>
  );
}
export default Photography;