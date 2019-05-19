import React from 'react';
import NavigationItemStyle from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={NavigationItemStyle.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? NavigationItemStyle.active : null}
        >{props.children}</a>
    </li>
)
export default navigationItem;