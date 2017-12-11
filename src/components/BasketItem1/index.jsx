import React from "react";
import withStyles from "../HOC/styles";
import basketItemStyles from "./styles.css";

class BasketItem extends React.Component {
  componentDidMount() {
    require("../../../dist/semantic/dist/semantic.min.js");
    $('.dropdown').dropdown();
  }

  render() {
    const {
      onRemove, 
      classes,
      item,
    } = this.props;

    return (
      <div className={classes.basketItem}>
        <div className="ui grid middle aligned">
          <div className="nine wide column">
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.description}>{item.description}</p>
          </div>
          <div className="five wide column"  style={{textAlign:"right"}}>
            <div className="ui floating dropdown labeled icon button">
              <i className="options icon"></i>
              <span className="text">Options</span>
              <div className="menu">
                <div className="item">Basic Lease</div>
                <div className="item">Premium Lease</div>
                <div className="item">Exclusive Rights</div>
              </div>
            </div>
          </div>
          <div className="two wide column" style={{textAlign:"right"}}> 
            <h3 className={classes.price}>
              $19.99
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(BasketItem, basketItemStyles);