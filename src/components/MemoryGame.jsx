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
    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)

    useEffect(() => {
        console.log("First Card: ", firstCard)
        console.log("Second Card: ", secondCard)
    }, [firstCard, secondCard]);

    const selectCard = (selectedCard) => {
        if (!firstCard) {
            setFirstCard(selectedCard)
        } else {
            setSecondCard(selectedCard)

            if ((firstCard.number === selectedCard.number)
                && (firstCard.index !== selectedCard.index)) {

                const updatedNumbers = numbers.filter(number => number !== firstCard.number)
                
                setTimeout(() => {
                    setNumbers(updatedNumbers)
                }, 750);
            }

            setTimeout(() => {
                setFirstCard(null)
                setSecondCard(null)
            }, 750);
        }
    }

    const isCardFlipped = ({ number, index }) => {
        const isFirstCard = firstCard && firstCard.index === index && firstCard.number === number
        const isSecondCard = secondCard && secondCard.index === index && secondCard.number === number
        
        return isFirstCard || isSecondCard
    }

    return (
        <div id='card-section'>
            {numbers.map((number, index) => {
                return (
                    <Card
                        key={index}
                        onFlip={() => selectCard({ number, index })}
                        number={number}
                        isFlipped={isCardFlipped({ number, index })}
                    />
                )
            })}
        </div>
    )
}

export default MemoryGame;