import * as React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ButtonGroup, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import useStyles from "./SocialHandles.styles";
function ResponsiveAppBar() {
  const classes = useStyles();
  const buttons = [
    <IconButton
      key="linkedIn"
      color="primary"
      target="_blank"
      href="https://www.linkedin.com/in/himanshuu-soni/"
    >
      <LinkedInIcon />
    </IconButton>,
    <IconButton
      key="twitter"
      color="primary"
      target="_blank"
      href="https://twitter.com/codeliteral"
    >
      <TwitterIcon />
    </IconButton>,
    <IconButton
      key="github"
      color="primary"
      target="_blank"
      href="https://github.com/himanshua790"
    >
      <GitHubIcon />
    </IconButton>,
  ];
  return (
    <div className={classes.container}>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </div>
  );
}
export default ResponsiveAppBar;