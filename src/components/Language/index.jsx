import React from "react";
import { connect } from "react-redux";
import { LANGUAGE_RUS, LANGUAGE_US } from "../../consts";
import t from "./translation";
import { appSwitchLanguage } from "../../actions/app";

class Language extends React.Component {
  componentDidMount() {
    this.dropdownReset();
  }

  dropdownReset() {
    require("../../../dist/semantic/dist/semantic.min.js");
    $(".dropdown").dropdown();
  }

  render() {
    const {
      language,
      appSwitchLanguage
    } = this.props;

    return <div className="ui dropdown item">
      <div className="text">{language}</div>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div onClick={() => {
          appSwitchLanguage(LANGUAGE_RUS)
        }} className="item">
          <i className="ru flag"></i>
          {t[language]["russian"]}
        </div>
        <div onClick={() => {
          appSwitchLanguage(LANGUAGE_US)
        }} className="item">
          <i className="us flag"></i>
          {t[language]["english"]}
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = ({ app }) => ({
  language: app.language,
})

const mapDispatchToProps = dispatch => ({
  appSwitchLanguage: language => dispatch(appSwitchLanguage(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Language);