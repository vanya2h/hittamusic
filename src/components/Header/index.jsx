import React from "react";
import withStyles from "../HOC/styles";
import { NavLink } from "react-router-dom";
import componentStyles from "./styles.css";

const Header = ({ classes }) => {
  return (
    <div className={classes.menu}>
      <div className="ui container">
        <div className="ui big secondary pointing menu">
          <NavLink exact activeClassName="active" to="/" className="item">
            Beats
          </NavLink>
          <a className="item">
            How To Buy Beats?
          </a>
          <div className="right menu">
            <NavLink  activeClassName="active"  to="/basket" className="ui item">
              Basket
              <div className="floating ui red label">22</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withStyles(Header, componentStyles);