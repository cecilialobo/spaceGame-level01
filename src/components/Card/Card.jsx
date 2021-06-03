import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(props.isFlipped)

    useEffect(() => {
    }, [isFlipped])

    return (
        <>
            <button className={'card' + props.number} onClick={() => {
                props.onFlip();
                setIsFlipped(!isFlipped)
            }}>{isFlipped ? props.number : 'Click to flip'}</button>
        </>
    )
}

export default Card;