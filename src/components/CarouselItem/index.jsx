import React from "react";
import withStyles from "../HOC/styles";
import carouselItemStyles from "./styles.css";
import config from "../../../config";

const renderButton = (isAdded, add, remove, option, number) => {
  if (isAdded) {
    return (
      <button
        onClick={remove}
        className="button ui red inverted big"
      >
        <span>Remove from cart</span>
      </button>
    );
  } else {
    return (
      <span>
        <select value={option} className={`ui selection dropdown-${number} large inverted button`}>
          <option value="basic">Basic Lease</option>
          <option value="premium">Premium Lease</option>
          <option value="exclusive">Exclusive Rights</option>
        </select>
        <button
          onClick={() => { add(option) }}
          className="button ui green inverted large icon"
        >
          <span><i className="icon in cart"></i> Add To Cart</span>
        </button>
      </span>
    );
  }
}

const renderTags = tags =>
  tags.map((item, i) => (
    <div key={i} className="item">
      <div className="content">
        <div className="header">{item}</div>
      </div>
    </div>
  ));

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "basic",
    };
  }

  componentDidMount() {
    const { number } = this.props;

    require("../../../dist/semantic/dist/semantic.min.js");
    $(`.dropdown-${number}`).dropdown({
      onChange: option => this.setState({ option }),
      direction: "upward"
    });
  }

  render() {
    const {
      classes,
      item,
      onAddToCart,
      onRemoveFromCart,
      isAdded,
      number
    } = this.props;

    const {
      option
    } = this.state;

    return (
      <div
        className={classes.slide}
        style={{ background: `url(${config.static_url + item.image})` }}
      >
        <div className={`${classes.content} ui container`}>
          <div className={classes.title}>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div style={{ marginTop: "10px" }} className="ui horizontal divided list inverted">
              {renderTags(item.tags)}
            </div>
            <div className={classes.player}>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.soundcloudId}&amp;color=%23053314&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false`}
              />
            </div>
            <div className={classes.action}>
              {renderButton(isAdded, onAddToCart, onRemoveFromCart, option, number)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(CarouselItem, carouselItemStyles);