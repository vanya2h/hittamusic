import React from "react";
import loaderStyles from "./styles.css";
import withStyles from "../HOC/styles";

const Loader = ({ classes, title }) => <div>
  <div className={classes.loader}></div>
  <div className={classes.title}>{title && title}</div>
</div>

export default withStyles(Loader, loaderStyles);