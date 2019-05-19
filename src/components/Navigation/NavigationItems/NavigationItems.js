import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import navigationItemsStyle from './NavigationItems.css';

const navigationItems = () => (
    <ul className={navigationItemsStyle.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
)
export default navigationItems;