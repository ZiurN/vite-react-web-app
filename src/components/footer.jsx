import styles from '../styles/footer.module.sass';
import githubLogo from '../assets/github.svg';
import linkedInLogo from '../assets/linkedin.svg';
import behanceLogo from '../assets/behance.svg';
import emailLogo from '../assets/email.svg';

function Footer() {
  return (
    <footer className={`${styles.footer}`} >
      <div>
          <span className={`${styles.contact}`}>Contact</span>
      </div>
      <nav>
        <ul className={`${styles.logos}`} >
          <li className={`${styles.logoContainer}`}>
            <a href="">
              <img className={`${styles.logo}`} src={githubLogo} />
            </a>
          </li>
          <li className={`${styles.logoContainer}`}>
            <a href="">
              <img className={`${styles.logo}`} src={linkedInLogo} />
            </a>
          </li>
          <li className={`${styles.logoContainer}`}>
            <a href="">
              <img className={`${styles.logo}`} src={behanceLogo} />
            </a>
          </li>
          <li className={`${styles.logoContainer}`}>
            <a href="">
              <img className={`${styles.logo}`} src={emailLogo} />
            </a>
          </li>
        </ul>
      </nav>
      <div className={`${styles.pageInfo}`}>
        <p>2022</p>
        <p>Version 1.0</p>
      </div>
    </footer>
  );
}
export default Footer;