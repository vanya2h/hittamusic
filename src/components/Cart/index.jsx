import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import withStyles from "../HOC/styles";
import cartStyles from "./styles.css";
import { removeItemFromCart } from "../../actions/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const {
      items,
      classes,
      removeItemFromCart
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
        <CartItem
          onRemove={() => { removeItemFromCart(item.id) }}
          key={i}
          item={item}
        />
      );
    }
  }

  render() {
    const { classes } = this.props;

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

const mapStateToProps = ({ cart, items }) => ({
  items: cart.items.map(item => items.filter(i => i.id === item.id)[0]),
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: id => dispatch(removeItemFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Cart, cartStyles)
);