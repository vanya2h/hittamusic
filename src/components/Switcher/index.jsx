import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import { NavLink } from "react-router-dom";
import componentStyles from "./styles.css";
import { switchItem } from "../../actions/carousel";

const renderButton = (isActive, toggle, classes) => {
  if (isActive) {
    return (
      <div onClick={toggle} className={classes.toggler}>
        <span><i className="icon angle down"></i> Close</span>
      </div>
    );
  } else {
    return (
      <div onClick={toggle} className={classes.toggler}>
        <span><i className="icon sidebar"></i> List of Beats</span>
      </div>
    );
  }
}

const renderList = (list, onChange, classes) => {
  return (
    <div className={classes.list}>
      {list.map((item, number) => (
        <div onClick={() => { onChange(number) }} className={classes.item}>
          <i className="icon play"></i> {item.title}
          <div className={classes.price}>
            from ${item.price.basic}
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
    const { classes, items, switchItem } = this.props;
    const { isActive } = this.state;
    return (
      <div className={`${classes.switcher} ${this.state.isActive ? classes.active : ""}`}>
        {renderButton(isActive, this.toggle, classes)}
        {renderList(items, switchItem, classes)}
      </div>
    );
  }
};

const mapStateToProps = ({ items }) => ({
  items
});

const mapDispatchToProps = dispatch => ({
  switchItem: number => dispatch(switchItem(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Switcher, componentStyles)
);