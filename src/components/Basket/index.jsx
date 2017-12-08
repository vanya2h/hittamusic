import React from "react";
import { connect } from "react-redux";
import BasketItem from "../BasketItem";
import withStyles from "../HOC/styles";
import basketStyles from "./styles.css";
import { removeItemFromBasket } from "../../actions/basket";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const { 
      items, 
      classes,
      removeItemFromBasket
    } = this.props;

    if (!items) {
      return <div className={classes.loading}>
        Loading..
      </div>
    } else if (!items.length) {
      return <div className={classes.noConent}>
        Seems, you forgot to pick something
      </div>
    } else {
      return items.map((item, i) => 
        <BasketItem onRemove={removeItemFromBasket} key={i} item={item} />
      );
    }
  }

  render() {
    const { classes } = this.props; 
    console.log(this.props)

    return (
      <div className={classes.wrapper}>
        <div className={classes.list}>
          {this.renderItems()}
        </div>
        <div className={classes.action}>
          <button className="ui button fluid big green">
            Proceed To Checkout
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ basket, items }) => ({
  items: basket.items.map(item => items.filter(i => i.id === item)[0]),
});

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: id => dispatch(removeItemFromBasket(id)),
})

export default connect(mapStateToProps, null)(
  withStyles(Basket, basketStyles)
);