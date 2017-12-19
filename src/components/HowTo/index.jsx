import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import howToStyles from "./styles.css";
import translation from "./translation";

const HowTo = ({ language, classes }) => {
  return (
    <div className={classes.wrapper}>
      <h2>{translation[language]['title']}</h2>
      <p>{translation[language]['content']}</p>
    </div>
  )
}

const mapStateToProps = ({ app }) => ({
  language: app.language,
})

export default connect(mapStateToProps)(
  withStyles(HowTo, howToStyles)
);
