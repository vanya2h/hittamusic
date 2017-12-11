import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from "react-redux";
import withStyles from '../HOC/styles';
import componentStyles from './styles.css';
import config from '../../../config';
import CarouselItem from "../CarouselItem";
import { switchItem } from "../../actions/carousel";
import { addItemToCart, removeItemFromCart } from "../../actions/cart";
import translation from "./translation";

class CarouselComponent extends React.Component {
  renderCarouselItems() {
    const {
      items,
      classes,
      addItemToCart,
      removeItemFromCart,
      cartItems,
      currentLanguage
    } = this.props;

    if (!items) {
      return <div className={classes.loading}>
        {translation[currentLanguage]["loading"]}
      </div>
    } else if (!items.length) {
      return <div className={classes.noContent}>
        {translation[currentLanguage]["no-content"]}
      </div>
    } else {
      return items.map((item, i) =>
        <CarouselItem
          key={i}
          item={item}
          number={i}
          isAdded={cartItems.filter(current => current.id === item.id)[0]}
          onAddToCart={(option) => addItemToCart(item.id, option)}
          onRemoveFromCart={() => removeItemFromCart(item.id)}
        />
      );
    }
  }

  render() {
    const {
      selectedItem,
      switchItem
    } = this.props;

    return (
      <Carousel
        onChange={switchItem}
        selectedItem={selectedItem}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {this.renderCarouselItems()}
      </Carousel>
    );
  }
};

const mapStateToProps = ({ carousel, cart, app }) => ({
  selectedItem: carousel.selectedItem,
  cartItems: cart.items,
  currentLanguage: app.language,
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: (id, option) => dispatch(addItemToCart(id, option)),
  switchItem: number => dispatch(switchItem(number)),
  removeItemFromCart: id => dispatch(removeItemFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(CarouselComponent, componentStyles)
);
