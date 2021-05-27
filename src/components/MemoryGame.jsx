import React, { useState } from 'react';
import Card from './Card/Card';

const MemoryGame = () => {

    const memoryGameNumbers = ['876345', '647912', '513864', '982637', '876345', '513864', '134076', '647912', '982637'];

    const [openCard, setOpenCard] = useState(null)

    const flipCard = (number) => {
        if (openCard) {
            if (openCard === number) {
                //todo
            } else {
                //todo
            }
            setOpenCard(null)
        } else {
            setOpenCard(number)
        }
    }

    return (
        <div id='card-section'>
            {memoryGameNumbers.map((number, index) => {
                return (
                    <Card
                        number={number}
                        key={index}
                        onOpen={flipCard}
                    />
                )
            })}
        </div>
    )
}

export default MemoryGame;