import useStyles from "./LandingPage.styles";
const LandingPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <h1>
          Hi, I&apos;m <span className={styles.highlight}>Himanshu.</span>
          <br />
          I&apos;m a full stack developer.
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
