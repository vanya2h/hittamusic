import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import { NavLink } from "react-router-dom";
import componentStyles from "./styles.css";

const Header = ({ classes, cartLength }) => {
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
            <NavLink activeClassName="active" to="/cart" className="ui item">
              Cart
              <div className="ui red label">{cartLength}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({ cart }) => ({
  cartLength: cart.items.length,
});

export default connect(mapStateToProps)(
  withStyles(Header, componentStyles)
);