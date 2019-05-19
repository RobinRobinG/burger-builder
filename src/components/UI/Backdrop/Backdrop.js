import React from 'react';
import BackdropStyle from './backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={BackdropStyle.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;