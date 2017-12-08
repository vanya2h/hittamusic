import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from "react-redux";
import withStyles from '../HOC/styles';
import componentStyles from './styles.css';
import config from '../../../config';
import CarouselItem from "../CarouselItem";
import { switchItem } from "../../actions/carousel";
import { addItemToBasket }  from "../../actions/basket";

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.switchItem = this.switchItem.bind(this);
  }

  renderCarouselItems() {
    const { 
      items, 
      classes,
      addItemToBasket
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
          onAddToBasket={addItemToBasket} 
        />
      );
    }
  }

  switchItem(i) {
    this.props.switchItem(i);
  }

  render() {
    const { selectedItem } = this.props;
    return (
      <Carousel onChange={this.switchItem} selectedItem={selectedItem} showThumbs={false} showStatus={false}>
        {this.renderCarouselItems()}
      </Carousel>
    );
  }
};

const mapStateToProps = ({ carousel }) => ({
  selectedItem: carousel.selectedItem,
});

const mapDispatchToProps = dispatch => ({
  addItemToBasket: (id) => dispatch(addItemToBasket(id)),
  switchItem: (number) => dispatch(switchItem(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(CarouselComponent, componentStyles)
);
