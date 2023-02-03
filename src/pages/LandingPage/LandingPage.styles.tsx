import { makeStyles } from "@mui/styles";

export default makeStyles({
  headerHero: { marginTop: "5rem", padding: "0 6rem" },
  heading: {
    fontFamily: "Mark Pro,sans-serif",
    fontSize: "5rem",
    lineHeight: "100%",
    letterSpacing: "-.03em",
    color: "var(--color-white)",
    position: "relative",
    fontWeight: "600",
  },
  headingGradient: {
    background:
      "linear-gradient(-45deg,var(--color-light-blue),var(--color-light-purple),var(--color-light-blue),var(--color-light-purple))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "400% 400%",
    WebkitAnimation: "gradient 1s ease infinite",
    animation: "gradient 1s ease infinite",
  },
  heroCTA: {
    marginTop: "5rem",
    display: "inline-block",
    fontFamily: "Sofia Sans Extra Condensed, sans-serif",
    fontSize: "1.2rem",
    lineHeight: "92.4%",
    letterSpacing: ".19em",
    color: "var(--color-gray)",
    textDecoration: "none",
    position: "relative",

    "&::after": {
      display: "block",
      content: '""',
      position: "absolute",
      bottom: "-1rem",
      left: "0",
      width: "50%",
      height: "1px",
      background: "var(--color-gray)",
      WebkitTransition: "all .3s ease",
      transition: "all .3s ease",
    },
  },
});
