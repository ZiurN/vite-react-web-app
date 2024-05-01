import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
import { UiContext } from "../contexts/uiContext";
import styles from '../styles/cv.module.sass';

function Cv () {
  const langCtx = useContext(LangContext);
  const uICtx = useContext(UiContext);
  const pageContent = langCtx.content.curriculum;
  uICtx.functions.setPageTitle(pageContent.header);
  let profile = pageContent.profile.map((item, index) => (
    <p className="" key={index}>
      {item}
    </p>
  ));
  let experience = pageContent.workExperience.map((item, index) => (
    <div className={`${styles.experienceItem}`} key={index}>
      <div>
        <div><img src={item.logoURL} alt="" /></div>
        <div>{item.startDate} - {item.endDate}</div>
      </div>
      <div>
        <h4>{item.position}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  ));
  let education = pageContent.education.map((item, index) => (
    <div className={`${styles.educationItem}`} key={index}>
      <div>
        <div><img src={item.logoURL} alt="" /></div>
      </div>
      <div>
        <h4>{item.degree}</h4>
        <h5>{item.school}</h5>
        <p>{item.endDate}</p>
      </div>
    </div>)
  );
  return (
    <main className={`${styles.main}`} >
      <h1>{pageContent.title}</h1>
      <h2>{pageContent.subtitle}</h2>
      <section>
        {profile}
      </section>
      <section>
        <h3>{langCtx.lang === 'ES' ? "Experiencia Laboral" : "Work Experiencie"}</h3>
        {experience}
      </section>
      <section>
        <h3>{langCtx.lang === 'ES' ? "Educación" : "Education"}</h3>
        {education}
      </section>
    </main>
  );
}
export default Cv;