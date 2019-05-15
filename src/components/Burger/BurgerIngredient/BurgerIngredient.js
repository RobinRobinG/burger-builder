import React from 'react';
import PropTypes from 'prop-types';
import IngredientStyle from './BurgerIngredient.css';

const burgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
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
        <div className={IngredientStyle.meat}></div>
      );
      break;
    case ('cheese'):
      ingredient = (
        <div className={IngredientStyle.cheese}></div>
      );
      break;
    case ('salad'):
      ingredient = (
        <div className={IngredientStyle.salad}></div>
      );
      break;
    case ('bacon'):
      ingredient = (
        <div className={IngredientStyle.bacon}></div>
      );
      break;
    default:
      ingredient= null;
  }
  return ingredient;
};

export default burgerIngredient;