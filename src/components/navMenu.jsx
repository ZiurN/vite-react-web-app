import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/navMenu.module.sass';
import menuArrowSymbol from '../assets/menuArrow.svg';
import { clickOutsideHandler } from '../hooks/clickOutsideHandler';
import NavMenuComponent from './navMenuComponent';

function NavMenu () {
  const [isAvailable, setIsAvailable] = useState(styles.navMenuHidden);
  const [menuOpened, setMenuOpened] = useState(false);
  const {childRef, clickOutsiteToggle} = clickOutsideHandler(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (menuOpened) showNavMenu();
  }, [clickOutsiteToggle]);

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
        <NavMenuComponent styles={styles} label="Salesforce" route="/salesforce" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label="Web Projects" route="/web-projects" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label="Photography" route="/photography" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label="Curriculum" route="/curriculum" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label="Curriculum" route="/curriculum" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label="Design Projects" route="/design-projects" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label="Blog" route="/blog" goToPage={goToPage} />
        <NavMenuComponent styles={styles} label="About Me" route="/about-me" goToPage={goToPage} />
			</ul>
      <div className={`${styles.toggleButtonContainer}`} onClick={() => showNavMenu()}>
        <img src={menuArrowSymbol} alt="Toggle Show Nav Menu" />
      </div>
		</nav>
	);
}
export default NavMenu