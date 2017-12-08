import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from "react-redux";
import withStyles from '../HOC/styles';
import componentStyles from './styles.css';
import config from '../../../config';
import CarouselItem from "../CarouselItem";
import { switchItem } from "../../actions/carousel";
import { addItemToCart, removeItemFromCart } from "../../actions/cart";

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.switchItem = this.switchItem.bind(this);
  }

  renderCarouselItems() {
    const {
      items,
      classes,
      addItemToCart,
      removeItemFromCart,
      cartItems,
    } = this.props;

    if (!items) {
      return <div className={classes.loading}>
        Loading..
      </div>
    } else if (!items.length) {
      return <div className={classes.noContent}>
        Seems, there's no beats
      </div>
    } else {
      return items.map((item, i) =>
        <CarouselItem
          key={i}
          item={item}
          number={i}
          isAdded={cartItems.filter(
            id => id === item.id
          )[0]}
          onAddToCart={(option) => {
            addItemToCart(item.id, option)
          }}
          onRemoveFromCart={() => {
            removeItemFromCart(item.id)
          }}
        />
      );
    }
  }

  switchItem(i) {
    this.props.switchItem(i);
  }

  render() {
    const {
      selectedItem
    } = this.props;

    return (
      <Carousel
        onChange={this.switchItem}
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

const mapStateToProps = ({ carousel, cart }) => ({
  selectedItem: carousel.selectedItem,
  cartItems: cart.items,
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: (id, option) => dispatch(addItemToCart(id, option)),
  switchItem: number => dispatch(switchItem(number)),
  removeItemFromCart: id => dispatch(removeItemFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(CarouselComponent, componentStyles)
);
