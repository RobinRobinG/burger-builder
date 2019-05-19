import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import LogoStyle from './Logo.css'

const logo = (props) => (
    <div className={LogoStyle.Logo}>
        <img src={burgerLogo} alt="My Burger" />
    </div>

);

export default logo;