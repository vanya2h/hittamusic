import React from "react";
import withStyles from "../HOC/styles";
import basketItemStyles from "./styles.css";


class BasketItem extends React.Component {

  componentDidMount() {
    require("../../../dist/semantic/dist/semantic.min.js");
    $(`.dropdown-${this.props.number}`).dropdown({
      onChange: this.props.onChangeOption,
    });
  }

  render() {
    const {
      classes,
      onRemove,
      item,
      number,
    } = this.props;

    return (
      <div className={classes.basketItem}>
        <div className="ui grid middle aligned">
          <div className="seven wide column">
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.description}>{item.description}</p>
          </div>
          <div className="five wide column" style={{ textAlign: "right" }}>
          <select 
            value={item.option} 
            className={`ui selection dropdown-${number} large inverted`}
          >
            <option value="basic">Basic Lease</option>
            <option value="premium">Premium Lease</option>
            <option value="exclusive">Exclusive Rights</option>
          </select>
          </div>
          <div className="two wide column" style={{ textAlign: "right" }}>
            <h3 className={classes.price}>
              ${item.price[item.option]}
            </h3>
          </div>
          <div className="two wide column" style={{ textAlign: "right" }}>
            <button className="ui button icon red" onClick={onRemove}>
              <i className="icon close"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(BasketItem, basketItemStyles);