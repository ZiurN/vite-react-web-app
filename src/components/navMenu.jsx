import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../styles/navMenu.module.sass';
import menuArrowSymbol from '../assets/menuArrow.svg';
import { clickOutsideHandler } from '../hooks/clickOutsideHandler';

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
        <li className={`${styles.navMenuOption}`} onClick={() => {goToPage("/web-projects")}}>
          <p>Web Projects</p>
          <div className={`${styles.navMenuOptionLine}`}></div>
        </li>
        <li className={`${styles.navMenuOption}`} onClick={() => {goToPage("/photography")}}>
          <p>Photography</p>
          <div className={`${styles.navMenuOptionLine}`}></div>
        </li>
        <li className={`${styles.navMenuOption}`} onClick={() => {goToPage("/curriculum")}}>
          <p>Curriculum</p>
          <div className={`${styles.navMenuOptionLine}`}></div>
        </li>
        <li className={`${styles.navMenuOption}`} onClick={() => {goToPage("/design-projects")}}>
          <p>Design Projects</p>
          <div className={`${styles.navMenuOptionLine}`}></div>
        </li>
        <li className={`${styles.navMenuOption}`} onClick={() => {goToPage("/blog")}}>
          <p>Blog</p>
          <div className={`${styles.navMenuOptionLine}`}></div>
        </li>
        <li className={`${styles.navMenuOption}`} onClick={() => {goToPage("/about-me")}}>
          <p>About Me</p>
          <div className={`${styles.navMenuOptionLine}`}></div>
        </li>
			</ul>
      <div className={`${styles.toggleButtonContainer}`} onClick={() => showNavMenu()}>
        <img src={menuArrowSymbol} alt="Toggle Show Nav Menu" />
      </div>
		</nav>
	);
}
export default NavMenu