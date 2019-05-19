import React, {Component} from 'react';
import PropTypes from 'prop-types';
import IngredientStyle from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={IngredientStyle.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={IngredientStyle.BreadTop}>
            <div className={IngredientStyle.Seeds1}></div>
            <div className={IngredientStyle.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = (
          <div className={IngredientStyle.Meat}></div>
        );
        break;
      case ('cheese'):
        ingredient = (
          <div className={IngredientStyle.Cheese}></div>
        );
        break;
      case ('salad'):
        ingredient = (
          <div className={IngredientStyle.Salad}></div>
        );
        break;
      case ('bacon'):
        ingredient = (
          <div className={IngredientStyle.Bacon}></div>
        );
        break;
      default:
        ingredient= null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}
export default BurgerIngredient;

