function NavMenuComponent ({styles, label, route, goToPage}) {
	return (
		<li className={`${styles.navMenuOption}`} onClick={() => {goToPage(route)}}>
          <p>{label}</p>
          <div className={`${styles.navMenuOptionLine}`}></div>
        </li>
	);
}
export default NavMenuComponent;