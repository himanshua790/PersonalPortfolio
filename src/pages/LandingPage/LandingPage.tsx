import useStyles from "./LandingPage.styles";
const LandingPage = () => {
  const classes = useStyles();
  return (
    <header>
      <div className={classes.headerHero}>
        <div className={classes.heading}>
          <span>turning ideas into </span> <br />
          <span>real life </span>
          <span className={classes.headingGradient}>products </span>
          <br />
          <span>is my calling.</span>
        </div>
        <a
          data-scroll-to="true"
          className={classes.heroCTA}
          href="#sectionProjects"
        >
          VIEW PROJECTS
        </a>
      </div>
    </header>
  );
};

export default LandingPage;
