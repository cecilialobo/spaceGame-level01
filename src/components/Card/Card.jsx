import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <>
            <button className={'card' + props.number} onClick={() => {
                props.onFlip();
            }}>{props.isFlipped ? props.number : 'Click to flip'}</button>
        </>
    )
}

export default Card;