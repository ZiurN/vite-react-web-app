import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";
import styles from '../styles/home.module.sass';

function Home () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.home;
  uICtx.functions.setPageTitle(pageContent.header);
  let paragraphs = pageContent.content.map((item, index) => (
    <p className="indent" key={index}>
        {item}
    </p>
  ));
  return (
    <main className={`${styles.main}`} >
      <div></div>
      <div className={`${styles.container}`} >
        <div>{pageContent.title}</div>
        {paragraphs}
      </div>
    </main>
  );
}
export default Home;