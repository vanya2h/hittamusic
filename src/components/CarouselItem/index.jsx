import React from "react";
import withStyles from "../HOC/styles";
import carouselItemStyles from "./styles.css";
import Price from "../Price"
import config from "../../../config";

const renderTags = tags =>
  tags.map((item, i) => (
    <div key={i} className="item">
      <div className="content">
        <div className="header">{item}</div>
      </div>
    </div>
  ));

const ItemBar = ({
  isAdded,
  onAddToCart,
  onRemoveFromCart,
  number,
  classes,
  item,
}, props) => {
  if (isAdded) {
    return (
      <button
        onClick={() => {
          onRemoveFromCart()
            .then(() => dropdownReset())
            .catch((err) => console.log(err));
        }}
        className="button ui red inverted big"
      >
        <span>Remove from cart</span>
      </button>
    );
  } else {
    return (
      <span className={classes.bar}>
        <button
          onClick={() => { onAddToCart() }}
          className="button ui green inverted large icon"
        >
          <span>
            <i className="icon in cart"></i> Add To Cart
          </span>
        </button>
        <h3 className={classes.price}>
          От <Price price={item.price["basic"]} />
        </h3>
      </span>
    );
  }
}

const CarouselItem = ({
  classes,
  item,
  onAddToCart,
  onRemoveFromCart,
  isAdded,
}) => {
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
            {isAdded ?
              <button
                onClick={() => {
                  onRemoveFromCart()
                    .catch((err) => console.log(err));
                }}
                className="button ui red inverted big"
              >
                <span>Remove from cart</span>
              </button>
            :
              <span className={classes.bar}>
                <button
                  onClick={() => { onAddToCart() }}
                  className="button ui green inverted large icon"
                >
                  <span>
                    <i className="icon in cart"></i> Add To Cart
                  </span>
                </button>
                <h3 className={classes.price}>
                  <Price price={item.price["basic"]} />
                </h3>
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(CarouselItem, carouselItemStyles);