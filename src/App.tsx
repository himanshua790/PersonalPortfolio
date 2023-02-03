import Grid from "@mui/material/Grid";
import Navigation from "./components/Navigation";
import useStyles from "./global.styles";
import LandingPage from "./pages/LandingPage";

type Props = {};

function App({}: Props) {
  const classes = useStyles();
  return (
    <Grid
      direction="column"
      container
      xs={12}
      // alignContent={"center"}
      justifyContent={"center"}
      // style={{ Top: "100px" }}
      spacing={5}
      className={classes.main}
    >
      <Grid item xs={1}>
        <Navigation />
      </Grid>
      <Grid item xs={1}>
        <LandingPage />
      </Grid>
    </Grid>
  );
}

export default App;
