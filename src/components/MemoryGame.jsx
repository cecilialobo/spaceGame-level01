import React, { useState, useEffect } from 'react';
import Card from './Card/Card';

const MemoryGame = () => {

    const [numbers, setNumbers] = useState(['876345', '647912', '513864', '982637', '876345', '513864', '134076', '647912', '982637'])
    const [flippedCard, setFlippedCard] = useState(null)
    const [latestSelectedCard, setLatestSelectedCard] = useState(null)

    useEffect(() => {
        if (flippedCard && latestSelectedCard) {
            if ((flippedCard.number === latestSelectedCard.number)
                && (flippedCard.index !== latestSelectedCard.index)) {

                const updatedNumbers = numbers.filter(number => number !== flippedCard.number)
                setTimeout(() => { setNumbers(updatedNumbers) }, 750);
            }

            setTimeout(() => {
                setFlippedCard(null)
                setLatestSelectedCard(null)
            }, 750);
        }
    }, [flippedCard, latestSelectedCard, numbers]);

    const flipCard = (selectedCard) => {
        if (!flippedCard) {
            setFlippedCard(selectedCard)
        } else if (!latestSelectedCard) {
            setLatestSelectedCard(selectedCard)
        }
    }

    const isCardFlipped = ({ number, index }) => {
        const isFlippedCard = flippedCard
            && flippedCard.index === index
            && flippedCard.number === number

        const isLatestSelectedCard = latestSelectedCard
            && latestSelectedCard.index === index
            && latestSelectedCard.number === number

        return isFlippedCard || isLatestSelectedCard
    }

    return (
        <div id='card-section'>
            {numbers.map((number, index) => {
                return (
                    <Card
                        key={index}
                        onFlip={() => flipCard({ number, index })}
                        number={number}
                        isFlipped={isCardFlipped({ number, index })}
                    />
                )
            })}
        </div>
    )
}

export default MemoryGame;