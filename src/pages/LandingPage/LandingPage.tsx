import styles from "./LandingPage.module.scss";
const LandingPage = () => {
  return (
    <div className={styles.headerHero}>
      <div className={styles.heading}>
        <span>turning ideas into </span> <br />
        <span>real life </span>
        <span className={styles.headingGradient}>products </span>
        <br />
        <span>is my calling.</span>
      </div>
      <a
        data-scroll-to="true"
        className={styles.heroCTA}
        href="#sectionProjects"
      >
        VIEW PROJECTS
      </a>
    </div>
  );
};

export default LandingPage;
