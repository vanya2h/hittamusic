import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import howToStyles from "./styles.css";
import t from "./translation";

const HowTo = ({ language, classes }) => {
  return (
    <div className={classes.wrapper}>
      <h2>{t[language]['title']}</h2>
      {React.cloneElement(t[language]['content'](classes))}
    </div>
  )
}

const mapStateToProps = ({ app }) => ({
  language: app.language,
})

export default connect(mapStateToProps)(
  withStyles(HowTo, howToStyles)
);
