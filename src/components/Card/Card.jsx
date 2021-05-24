import React, {useState} from 'react';
import './Card.css';

const Card = (props) => {

    const [flipped, setFlipped] = useState(false);

    return (
        <>
            {flipped && 
            <button className='card' onClick={() => {setFlipped(false)}}>{props.number}</button>
            }

            {!flipped && 
            <button className='card' onClick={() => {setFlipped(true)}}>Click to Flip</button>
            }
        </>
    )
}

export default Card;