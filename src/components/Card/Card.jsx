import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {

    const [flipped, setFlipped] = useState(false);

    return (
        <>
            {flipped && 
                <button className={'card' + props.number} onClick={() => { 
                    setFlipped(false) 
                }}>{props.number}</button>
            }

            {!flipped &&
                <button className={'card' + props.number} onClick={() => {
                    setFlipped(true)
                    props.onOpen(props.number)
                }}>Click to Flip</button>
            }
        </>
    )
}

export default Card;