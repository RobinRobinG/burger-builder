import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerStyle from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux';


const sideDrawer = (props) => {
    let attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Close]
    if (props.open) {
        attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Open]
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={SideDrawerStyle.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}
export default sideDrawer;
