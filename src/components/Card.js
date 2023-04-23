import React from "react";
import { shuffleCards } from "../utils/shuffleCards";
import { shuffleArray } from "../utils/shuffleArray";

const Card = ({ list, score, card, setScore, setBest, setList }) => {

    const handleClick = () => {


        if (!card.isClicked) {
            card.isClicked = true
            setScore((prev) => prev + 1)
            if (list.length - 1 !== score) {
                setList(prevList => shuffleCards(prevList))
            }
        } else {
            setScore(prevScore => {
                setBest(prevBest => {
                    if (prevScore > prevBest) return prevScore
                    return prevBest
                })
                return 0
            })
            setList(prevList => {
                const shuffled = shuffleArray(prevList)
                return shuffled.map(card => {
                    return {
                        ...card,
                        isClicked: false
                    }
                })
            })
        }
    }

    return (
        <div className={card.isClicked ? 'card' : 'card'} onClick={handleClick}>
            <p>{card.name}</p>
            <img src={card.image} />
        </div>
    )
}

export default Card