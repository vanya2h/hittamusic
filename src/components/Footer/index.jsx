import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import { NavLink } from "react-router-dom";
import componentStyles from "./styles.css";

const Footer = ({ classes, cartLength }) => {
  return (
    <div className={classes.footer}>
      <div className="ui container">
        <div className="ui big secondary pointing menu">
          <a className="item" href="https://vk.com/hittabeatz" target="_blank" rel="norefferer noopener">
            vk
          </a>
          <a className="item" href="https://twitter.com/HittaOnThaTrakk" target="_blank" rel="norefferer noopener">
            twitter
          </a>
          <a className="item" href="https://soundcloud.com/ittanharakk" target="_blank" rel="norefferer noopener">
            soundcloud
          </a>
          <a className="item" href="https://www.instagram.com/hittabeatz__hibandz/" target="_blank" rel="norefferer noopener">
            instagram
          </a>
        </div>
      </div>
    </div>
  )
};

export default withStyles(Footer, componentStyles);