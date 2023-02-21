import styles from "./LandingFooter.module.scss";
const LandingFooter = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headerRight}>
        <a
          href="https://github.com/himanshua790"
          rel="noreferrer"
          target="_blank"
        >
          👾 GH
        </a>
        <a
          href="https://twitter.com/codeliteral"
          rel="noreferrer"
          target="_blank"
        >
          🐦 TW
        </a>
        <a
          href="https://www.linkedin.com/in/himanshuu-soni/"
          rel="noreferrer"
          target="_blank"
        >
          💼 LD
        </a>
        <a
          href="https://www.instagram.com/tony_codes"
          rel="noreferrer"
          target="_blank"
        >
          📸 IN
        </a>
      </div>
    </div>
  );
};

export default LandingFooter;
