import React, { useState, useEffect } from 'react';
import Card from './Card/Card';

const MemoryGame = () => {

    const memoryGameNumbers = ['876345', '647912', '513864', '982637', '876345', '513864', '134076', '647912', '982637'];

    const [openCard, setOpenCard] = useState(null)

    const flipCard = (number) => {
        if (openCard) {
            if (openCard === number) {
                memoryGameNumbers.splice(memoryGameNumbers.indexOf(openCard), 1)
                console.log(memoryGameNumbers)
            } else {
                //desvirar as duas cartas
                setOpenCard(null)
            }
        } else {
            setOpenCard(number)
            console.log('2else' + openCard)
        }
    }

    useEffect(() => {
        document.getElementById('card-section');
    }, [memoryGameNumbers])

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