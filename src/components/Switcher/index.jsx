import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import { NavLink } from "react-router-dom";
import componentStyles from "./styles.css";
import { switchItem } from "../../actions/carousel";
import translation from "./translation";
import Price from "../Price";

const renderButton = (isActive, toggle, classes, language) => {
  if (isActive) {
    return (
      <div onClick={toggle} className={classes.toggler}>
        <span><i className="icon angle down"></i> {translation[language]['close']}</span>
      </div>
    );
  } else {
    return (
      <div onClick={toggle} className={classes.toggler}>
        <span><i className="icon sidebar"></i> {translation[language]['list']}</span>
      </div>
    );
  }
}

const renderList = (list, onChange, classes, language) => {
  return (
    <div className={classes.list}>
      {list.map((item, number) => (
        <div onClick={() => { onChange(number) }} className={classes.item}>
          <i className="icon play"></i> {item.title}
          <div className={classes.price}>
            {translation[language]['from']} <Price price={item.price.basic} />
          </div>
        </div>
      ))}
    </div>
  );
}

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isActive: false
    }
  }

  toggle() {
    this.setState(state => ({
      isActive: !state.isActive,
    }));
  }

  render() {
    const { classes, items, switchItem, language } = this.props;
    const { isActive } = this.state;
    return (
      <div className={`${classes.switcher} ${this.state.isActive ? classes.active : ""}`}>
        {renderButton(isActive, this.toggle, classes, language)}
        {renderList(items, switchItem, classes, language)}
      </div>
    );
  }
};

const mapStateToProps = ({ items, app }) => ({
  items,
  language: app.language,
});

const mapDispatchToProps = dispatch => ({
  switchItem: number => dispatch(switchItem(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Switcher, componentStyles)
);