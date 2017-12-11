import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import withStyles from "../HOC/styles";
import cartStyles from "./styles.css";
import { removeItemFromCart, changeOption } from "../../actions/cart";
import translation from "./translation";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const {
      items,
      classes,
      removeItemFromCart,
      changeOption,
      language,
    } = this.props;

    if (!items) {
      return <div className={classes.loading}>
        {translation[language]['loading']}
      </div>
    } else if (!items.length) {
      return <div className={classes.noContent}>
        <h4>{translation[language]['no-content']}</h4>
      </div>
    } else {
      return items.map((item, i) =>
        <CartItem
          onRemove={() => { removeItemFromCart(item.id) }}
          onChangeOption={option => { changeOption(item.id, option) }}
          key={i}
          item={item}
          number={i}
        />
      );
    }
  }

  render() {
    const { classes, language, items } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.list}>
          {this.renderItems()}
        </div>
        {items && !!items.length &&
          <div className={classes.action}>
            <button className="ui button fluid big green">
              {translation[language]["proceed"]}
            </button>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ cart, items, app }) => ({
  language: app.language,
  items: cart.items.map(item => {
    const itemFromDb = items.filter(
      current => current.id === item.id
    )[0];

    if (itemFromDb) {
      return {
        ...itemFromDb,
        option: item.option,
      }
    }
  }),
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: id => dispatch(removeItemFromCart(id)),
  changeOption: (id, option) => dispatch(changeOption(id, option)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Cart, cartStyles)
);