import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import styles from '../styles/home.module.sass';

function Home() {
  const langCtx = useContext(LangContext);
  const pageContent = langCtx.content.home;
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