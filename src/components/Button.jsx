import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <>
            <button id='keyboard-btn'>{props.number}</button>
        </>
    )
}

export default Button;