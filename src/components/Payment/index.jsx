import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import paymentStyles from "./styles.css";
import translation from "./translation";
import { clearCart } from "../../actions/cart";
import t from "./translation";
import Loader from "../Loader";
import Currency from "../Currency";

import {
  createPayment,
  storePayment,
} from "../../actions/payment";

const defaultState = {
  email: "",
}

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.createPayment = this.createPayment.bind(this);
    this.state = defaultState;
  }

  createPayment() {
    const {
      currency,
      cart,
      createPayment,
      storePayment,
      clearCart
    } = this.props;

    createPayment({
      email: this.state.email,
      currency: currency,
      items: cart
    })
      .then(payment => storePayment(payment))
      .then(() => clearCart())
      .catch(error => console.warn(error))
  }


  render() {
    const {
      classes,
      language,
      isHydrating,
      payment,
    } = this.props;

    return (
      <div className={classes.wrapper}>
        <h2>{t[language]['title']}</h2>
        {isHydrating ?
          <div style={{ margin: "20px auto" }}>
            <Loader title={t[language]['loading']} />
          </div>
          :
          <div className={classes.content}>
            <p>{t[language]['payment_currency']} <Currency /></p>
            <p>{t[language]['email_notice']}</p>
            <div className="ui action input big">
              <input value={this.state.email} onChange={(e) =>
                this.setState({ email: e.target.value })
              } type="text" placeholder={t[language]['email_holder']} />
              <button onClick={this.createPayment} className="ui button">
                {t[language]['enter_email']}
              </button>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({
  app,
  payment,
  cart,
  order,
  items
}) => ({
    language: app.language,
    isHydrating: payment.isHydrating,
    payment: payment.payment,
    error: payment.error,
    currency: app.currency,
    cart: cart.items.map(item => {
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
  createPayment: payment => dispatch(createPayment(payment)),
  storePayment: payment => dispatch(storePayment(payment)),
  clearCart: () => dispatch(clearCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Payment, paymentStyles)
);