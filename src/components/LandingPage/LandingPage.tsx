import Link from "next/link";
import styles from "./LandingPage.module.scss";
const LandingPage = () => {
  return (
    <>
      <div className="headerHero">
        <div className={styles.headerHeroHeading}>
          <span>turning ideas into </span> <br />
          <span>real life </span>
          <span className={styles.headingGradient}>products </span>
          <br />
          <span>is my calling.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "6rem" }}>
          <a
            data-scroll-to="true"
            className={styles.heroCTA}
            href="#sectionProjects"
          >
            VIEW PROJECTS
          </a>

          <Link data-scroll-to="true" className={styles.heroCTA} href="/resume">
            RESUME
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
