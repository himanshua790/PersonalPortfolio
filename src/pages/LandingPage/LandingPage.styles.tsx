import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    color: "#212529",
  },
  highlight: {
    fontSize: "2rem",
    textAlign: "center",
    backgroundImage: "linear-gradient(135deg, #02aab0, #00cdac)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  headingSection: {
    display: "flex",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "7rem",
    paddingRight: "15px",
    paddingBottom: "5rem",
    fontWeight: "700",
    marginBottom: "3.2rem",
    textAlign: "left",
  },
});
