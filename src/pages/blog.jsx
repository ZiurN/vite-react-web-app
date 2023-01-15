import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function Blog ({setPageTitle}) {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.blog;
  setPageTitle(pageContent.header);
  return (
      <div>Blog</div>
  );
}
export default Blog;