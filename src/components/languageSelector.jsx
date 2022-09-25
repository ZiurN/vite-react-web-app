import { useContext, useState } from "react";
import { LangContext } from "../contexts/langContext";
import styles from '../styles/header.module.sass';
import spainLogo from '../assets/spain.svg';
import englishLogo from '../assets/english.svg';

function LanguageSelector () {
  const [languageSelected, setlanguageSelected] = useState(englishLogo);
  const [height, setHeight] = useState(0);
  const langCtx = useContext(LangContext);
  const setLanguage = (language) => {
    if (language === 'ES') setlanguageSelected(spainLogo);
    if (language === 'EN') setlanguageSelected(englishLogo);
    langCtx.setLanguage(language);
    showOptions();
  }
  const showOptions = () => {
    if (height === 0) setHeight('7rem');
    else setHeight(0);
  }
	return (
		<div className={`${styles.languageSelectorContainer}`}>
      <div className={styles.languageSelected} onClick={() => showOptions()}>
        <img src={languageSelected} alt={langCtx.lang} />
      </div>
      <div className={`${styles.languageOptions}`}>
        <div className={`${styles.languageOptionsContainer}`} style={{height: height}}>
          <div className={`${styles.languageOption}`} onClick={() => setLanguage('EN')}>
            <div>
              <p>EN</p>
            </div>
            <img className={`${styles.languageOptionImage}`} src={englishLogo} alt="English" />
          </div>
          <div className={`${styles.languageOption}`} onClick={() => setLanguage('ES')}>
            <div>
              <p>ES</p>
            </div>
            <img className={`${styles.languageOptionImage}`} src={spainLogo} alt="Español" />
          </div>
        </div>
		  </div>
    </div>
	);
}
export default LanguageSelector;