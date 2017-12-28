import React from "react";
import { connect } from "react-redux";
import withStyles from "../HOC/styles";
import basketItemStyles from "./styles.css";
import Price from "../Price";
import translation from "./translation";

class BasketItem extends React.Component {
  constructor(props) {
    super(props);
    this.createDropdown = this.createDropdown.bind(this);
  }

  componentDidMount() {
    require("../../../dist/semantic/dist/semantic.min.js");
    this.createDropdown(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const { language } = this.props;

    if (nextProps.language !== language) {
      this.createDropdown(nextProps)
    }
  }

  createDropdown(props) {
    const { 
      number, 
      onChangeOption, 
      language,
      item
    } = props;

    $(`.dropdown-${number}`)
      .dropdown({
        onChange: onChangeOption,
        placeholder: translation[language]["placeholder"],
        values: generateValues(language, item.option)
      });
  }

  removeFromCart() {
    const { 
      onRemove, 
    } = this.props;

    onRemove()
      .then(() => this.createDropdown(this.props))
      .catch((err) => console.log(err));
  }

  render() {
    const {
      classes,
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
            </select>
          </div>
          <div className="three wide column">
            {item.option &&
              <h3 className={classes.price}>
                <Price price={item.price[item.option]} />
              </h3>
            }
            <span className={classes.remove} onClick={() => {this.removeFromCart()}}>
              <i className="icon close"></i> {translation[language]['remove']}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

const generateValues = (language, selected) => [{
  value: 'basic',
  name: translation[language]['basic'],
  selected: selected === 'basic',
}, {
  value: 'premium',
  name: translation[language]['premium'],
  selected: selected === 'premium',
}, {
  value: 'exclusive',
  name: translation[language]['exclusive'],
  selected: selected === 'exclusive',
}]

const mapStateToProps = ({ app }) => ({
  language: app.language,
})

export default connect(mapStateToProps)(
  withStyles(BasketItem, basketItemStyles)
);
