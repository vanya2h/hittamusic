import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import basketItemStyles from "./styles.css";
import Price from "../Price";
import translation from "./translation";

class BasketItem extends React.Component {

  componentDidMount() {
    const { translation, number, onChangeOption } = this.props;

    require("../../../dist/semantic/dist/semantic.min.js");
    $(`.dropdown-${number}`)
      .dropdown({
        onChange: onChangeOption,
        values: this.generateValues(this.props),
      });
  }

  componentWillReceiveProps(nextProps) {
    const { language, number, onChangeOption } = this.props;

    if (nextProps.language !== language) {
      $(`.dropdown-${number}`)
        .dropdown({
          onChange: onChangeOption,
          values: this.generateValues(nextProps),
        });
    }
  }

  generateValues(props) {
    return [{
      value: 'basic',
      name: translation[props.language]['basic'],
      selected: true,
    }, {
      value: 'premium',
      name: translation[props.language]['premium'],
    }, {
      value: 'exclusive',
      name: translation[props.language]['exclusive'],
    }]
  }

  render() {
    const {
      classes,
      onRemove,
      item,
      number,
      language,
    } = this.props;

    return (
      <div className={classes.basketItem}>
        <div className="ui grid middle aligned stackable">
          <div className="eight wide column">
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.description}>{item.description}</p>
          </div>
          <div className="five wide column">
            <select
              value={item.option}
              className={`ui selection dropdown-${number} large inverted`}
            >
              <option value="basic">{translation[language]['basic']}</option>
              <option value="premium">{translation[language]['premium']}</option>
              <option value="exclusive">{translation[language]['exclusive']}</option>
            </select>
          </div>
          <div className="three wide column">
            <h3 className={classes.price}>
              <Price price={item.price[item.option]} />
            </h3>
            <span className={classes.remove} onClick={onRemove}>
              <i className="icon close"></i> {translation[language]['remove']}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ app }) => ({
  language: app.language,
})

export default connect(mapStateToProps)(
  withStyles(BasketItem, basketItemStyles)
);
