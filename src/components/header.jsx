import { useContext } from "react";
import { UiContext } from "../contexts/uiContext";
import styles from '../styles/header.module.sass';
import ziurLogo from '../assets/ziurfreelance.svg';
import LanguageSelector from './languageSelector';

function Header() {
	const uICtx = useContext(UiContext);
  return (
    <header className={`${styles.header}`} >
      <ul className={`${styles.headerList}`}>
        <li className={`${styles.logoContainer}`}>
		      <a href="/">
            <img className={`${styles.logo}`} src={ziurLogo} />
          </a>
        </li>
        <li className={`${styles.title}`}>{uICtx.properties.pageTitle}</li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </header>
  );
}
export default Header;