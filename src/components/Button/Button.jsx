import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <>
            <button id='keyboard-btn' onClick={() => {props.typedNumber(props.number)}}>{props.number}</button>
        </>
    )
}

export default Button;