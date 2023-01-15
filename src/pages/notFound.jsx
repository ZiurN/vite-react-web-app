import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function NotFound({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.not_found;
  setPageTitle(pageContent.header);
  return (
    <div>NOT FOUND</div>
  );
}
export default NotFound;