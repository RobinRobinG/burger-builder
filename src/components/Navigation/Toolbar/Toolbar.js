import React from 'react';
import ToolbarStyle from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={ToolbarStyle.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={ToolbarStyle.Logo}>
            <Logo />
        </div>
        <nav className={ToolbarStyle.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>

);

export default toolbar;