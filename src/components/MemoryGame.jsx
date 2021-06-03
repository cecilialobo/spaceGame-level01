import React, { useState, useEffect } from 'react';
import Card from './Card/Card';

/**
 * TODO:
 * - Block flip when there is only one card
 * - Remove cards when numbers match
 * - Flip cards back when numbers mismatch
 */
const MemoryGame = () => {

    const [numbers, setNumbers] = useState(['876345', '647912', '513864', '982637', '876345', '513864', '134076', '647912', '982637'])
    const [flippedCard, setFlippedCard] = useState(null)

    useEffect(() => {
        console.log("Flipped Card: ", flippedCard)
    }, [flippedCard]);

    const selectCard = (selectedCard) => {
        if (flippedCard) {
            if ((selectedCard.number === flippedCard.number)
                && (selectedCard.index !== flippedCard.index)) {
                const updatedNumbers = numbers.filter(number => number !== selectedCard.number)
                setNumbers(updatedNumbers)
            }

            setFlippedCard(null);
        } else {
            setFlippedCard(selectedCard)
        }
    }

    return (
        <div id='card-section'>
            {numbers.map((number, index) => {
                return (
                    <Card
                        key={index}
                        onFlip={() => selectCard({ number, index })}
                        number={number}
                        isFlipped={flippedCard && flippedCard.index === index}
                    />
                )
            })}
        </div>
    )
}

export default MemoryGame;