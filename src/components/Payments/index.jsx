import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import paymentStyles from "./styles.css";
import translation from "./translation";
import t from "./translation";
import Loader from "../Loader";
import Currency from "../Currency";
import Item from "./Item";

const renderPayments = (payments) =>
  payments.map((payment, i) => <Item id={payment.id} key={i} />)

class Payments extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {
      classes,
      language,
      payments,
    } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h2>{t[language]['title']}</h2>
          <p className={classes.description}>
            {t[language]['description']}
          </p>
        </div>
        <div className={classes.list}>
          <table style={{ width: "100%" }} className="ui very basic collapsing celled table inverted stackable">
            <thead>
              <tr><th>{t[language]['item_id']}</th>
                <th>{t[language]['item_items']}</th>
                <th>{t[language]['item_total']}</th>
                <th>{t[language]['item_date']}</th>
                <th>{t[language]['item_status']}</th>
              </tr></thead>
            <tbody>
              {renderPayments(payments)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  app,
  payment,
}) => ({
    language: app.language,
    payments: payment.list,
  });

const mapDispatchToProps = dispatch => ({
  checkPaymentStatus: id => dispatch(checkPaymentStatus(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Payments, paymentStyles)
);