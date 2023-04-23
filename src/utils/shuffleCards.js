import { shuffleArray } from "./shuffleArray";

function isUnclickedCardExist(arr) {
    const slicedArr = arr.slice(0, 4)
    return slicedArr.some(card => !card.isClicked)
}

export const shuffleCards = (list) => {
    let newList = shuffleArray(list)
    while(!isUnclickedCardExist(newList)) {
        newList = shuffleArray(list)
    }
    return newList
}