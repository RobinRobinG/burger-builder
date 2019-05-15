import React from 'react';
import BuildControlStyle from './BuildControl.css';

const buildControl = (props) => (
    <div className={BuildControlStyle.BuildControl}>
        <div className={BuildControlStyle.Label}>{props.label}</div>
        <button 
            className={BuildControlStyle.Less} 
            onClick={props.removed} 
            disabled={props.disabled}
        >Less</button>
        <button 
            className={BuildControlStyle.More}
            onClick={props.added}
        >More</button>
    </div>
);

export default buildControl;