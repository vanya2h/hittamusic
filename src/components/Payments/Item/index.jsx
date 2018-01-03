import React from "react";
import { connect } from "react-redux"
import { checkPaymentStatus } from "../../../actions/payment";
import Loader from "../../Loader";
import t from "./translation";

const matchStatus = (language, status) => {
  if (status === 2 || status === 1000) {
    return t[language]["status_error"];
  } else if (status === 5) {
    return t[language]["status_start"]
  } else if (status === 10) {
    return t[language]["status_cancel"]
  } else if (status === 50) {
    return t[language]["status_done"]
  } else if (status === 60) {
    return t[language]["status_reject"]
  } else if (status === 80) {
    return t[language]["status_stop"]
  } else if (status === 100) {
    return t[language]["status_success"]
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.checkStatus = this.checkStatus.bind(this);
  }

  componentDidMount() {
    this.checkStatus();
  }

  checkStatus() {
    const {
      id,
      checkPaymentStatus,
    } = this.props;

    checkPaymentStatus(id);
  }

  render() {
    const {
      language,
      order,
    } = this.props;

    const {
      total,
      currency,
      invId,
      items,
      isHydrating,
      status,
    } = order;

    return <tr>
      <td>{invId}</td>
      <td>
        <div className="ui list inverted divided">
          {items.map(item => <div className="item">
            <div className="header">{item.title} ({item.option})</div>
          </div>)}
        </div>
      </td>
      <td>{total} {currency}</td>
      <td>03.01.2018</td>
      <td>
        {isHydrating ?
          <div>
            <Loader />
          </div>
          :
          <div>
            <span style={{ marginRight: "15px" }}>{matchStatus(language, status)}</span>
            <i title="Обновить" onClick={this.checkStatus} className="icon refresh"></i>
          </div>
        }
      </td>
    </tr>
  }
}

const mapStateToProps = ({ app, payment }, { id }) => ({
  language: app.language,
  order: payment.list.filter(item => item.id === id)[0],
});

const mapDispatchToProps = dispatch => ({
  checkPaymentStatus: id => dispatch(checkPaymentStatus(id)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Item);