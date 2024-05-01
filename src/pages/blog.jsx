import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";

function Blog () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.blog;
  uICtx.functions.setPageTitle(pageContent.header);
  return (
      <div>Blog</div>
  );
}
export default Blog;