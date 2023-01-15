import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/navMenu.module.sass';
import menuArrowSymbol from '../assets/menuArrow.svg';
import { clickOutsideHandler } from '../hooks/clickOutsideHandler';
import NavMenuComponent from './navMenuComponent';
import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

function NavMenu () {
  const langCtx = useContext(LangContext);
  const langContent = langCtx.content;
  const [isAvailable, setIsAvailable] = useState(styles.navMenuHidden);
  const [content, setContent] = useState({});
  const [menuOpened, setMenuOpened] = useState(false);
  const {childRef, clickOutsiteToggle} = clickOutsideHandler(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (menuOpened) showNavMenu();
  }, [clickOutsiteToggle]);
  useEffect(() => {
    setContent(langContent.nav_menu);
    console.log(langContent.nav_menu);
  }, [langContent]);

  const showNavMenu = () => {
    let toggle = menuOpened;
    setIsAvailable(!toggle ? styles.navMenuAvailable : styles.navMenuHidden);
    setMenuOpened(!toggle);
  }
  const goToPage = (pageAddress) => {
    navigate(pageAddress);
    showNavMenu();
  }
  return (
    <nav className={`${styles.navMenu} ${isAvailable}`} ref={childRef}>
      <ul >
        <NavMenuComponent
          styles={styles}
          label={content == undefined ? "Salesforce" : content.salesforce}
          route="/salesforce"
          goToPage={goToPage} />
        <NavMenuComponent
          styles={styles}
          label={content == undefined ? "Web Projects" : content.web_projects}
          route="/web-projects"
          goToPage={goToPage} />
        <NavMenuComponent
          styles={styles}
          label={content == undefined ? "Photography" : content.photography}
          route="/photography"
          goToPage={goToPage} />
        <NavMenuComponent
          styles={styles}
          label={content == undefined ? "Curriculum" : content.curriculum}
          route="/curriculum"
          goToPage={goToPage} />
        <NavMenuComponent
          styles={styles}
          label={content == undefined ? "Design Projects" : content.design_projects}
          route="/design-projects"
          goToPage={goToPage} />
        <NavMenuComponent
          styles={styles}
          label={content == undefined ? "Blog" : content.blog}
          route="/blog"
          goToPage={goToPage} />
        <NavMenuComponent
          styles={styles}
          label={content == undefined ? "About Me" : content.about_me}
          route="/about-me"
          goToPage={goToPage} />
      </ul>
      {/* <ul >
        <NavMenuComponent styles={styles} label={content.salesforce} route="/salesforce" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label={content.web_projects}route="/web-projects" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label={content.photography} route="/photography" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label={content.curriculum} route="/curriculum" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label={content.design_projects} route="/design-projects" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label={content.blog} route="/blog" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label={content.about_me} route="/about-me" goToPage={goToPage} />
      </ul> */}
      <div className={`${styles.toggleButtonContainer}`} onClick={() => showNavMenu()}>
        <img src={menuArrowSymbol} alt="Toggle Show Nav Menu" />
      </div>
    </nav>
  );
}
export default NavMenu