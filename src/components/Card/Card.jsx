import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <>
            <button className='card' onClick={() => {
                props.onFlip();
            }}>{props.isFlipped ? props.number : 'Click to flip'}</button>
        </>
    )
}

export default Card;