import { useContext, useState, useEffect } from "react";
import { LangContext } from "../contexts/langContext";
import { clickOutsideHandler } from '../hooks/clickOutsideHandler';
import styles from '../styles/header.module.sass';
import spainLogo from '../assets/spain.svg';
import englishLogo from '../assets/english.svg';

function LanguageSelector () {
  const [languageSelected, setlanguageSelected] = useState(englishLogo);
  const [menuOpened, setMenuOpened] = useState(false);
  const [height, setHeight] = useState(0);
  const langCtx = useContext(LangContext);
  const {childRef, clickOutsiteToggle} = clickOutsideHandler(true);
  useEffect(() => {
    if (menuOpened) showOptions();
  }, [clickOutsiteToggle]);
  const setLanguage = (language) => {
    let currentLanguage = langCtx.lang;
    if (language != currentLanguage) {
      if (language === 'ES') setlanguageSelected(spainLogo);
      if (language === 'EN') setlanguageSelected(englishLogo);
      langCtx.setLanguage(language);
    }
    showOptions();
  }
  const showOptions = () => {
    let toggle = menuOpened;
    if (toggle) {
      setHeight(0);
    } else {
      setHeight('7rem');
    }
    setMenuOpened(!toggle);
  }
  return (
    <div className={`${styles.languageSelectorContainer}`} ref={childRef}>
      <div className={styles.languageSelected} onClick={() => showOptions()}>
        <img src={languageSelected} alt={langCtx.lang} />
      </div>
      <div className={`${styles.languageOptions}`} >
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