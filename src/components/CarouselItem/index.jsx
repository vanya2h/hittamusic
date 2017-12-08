import React from "react";
import withStyles from "../HOC/styles";
import carouselItemStyles from "./styles.css";
import config from "../../../config";

const CarouselItem = ({ classes, item, onAddToBasket }) => {
  return (
    <div
      className={classes.slide}
      style={{ background: `url(${config.static_url + item.image})` }}
    >
      <div className={`${classes.content} ui container`}>
        <div className={classes.title}>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <div className={classes.player}>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameborder="no"
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.soundcloudId}&amp;color=%23053314&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false`}
            />
          </div>
          <div className={classes.action}>
            <button onClick={() => {
              onAddToBasket(item.id)
            }} className="button ui circular green inverted big">
              <i className="icon in cart"></i> Add To Cart
            </button>
            <div className="ui horizontal divided list inverted">
              {item.tags.map((item, i) => (
                <div className="item">
                  <div className="content">
                    <div className="header">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(CarouselItem, carouselItemStyles);