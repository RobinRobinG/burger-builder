import React from 'react';
import ButtonStyle from './Button.css'
const button = (props) => (
    <button
        className={[ButtonStyle.Button, ButtonStyle[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;