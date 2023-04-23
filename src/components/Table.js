import React, { useState, useEffect } from "react";
import Card from "./Card";
import Score from "./Score";


const Table = () => {
    const [list, setList] = useState([])
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)

    useEffect(async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,8,11,14,15,21,22,73,74,77,78,84]')
        const data = await response.json()
        const list = []
        for (let i = 0; i < data.length; i++) {
            const { id, name, image } = data[i]
            list.push({
                id,
                name,
                image,
                isClicked: false
            })
        }
        setList(list)

    }, [])

    let table

    if (!list.length) {
        table = <div>Loading...</div>
    } else {
        const newList = list.slice(0, 4)
        table = <div className="card-table">
                    {newList.map(card => <Card key={card.id} list={list} score={score} card={card} setScore={setScore} setBest={setBest} setList={setList}/>)}
                </div>
    }

    return (
        <>
        <Score score={score} best={best} />
        {table}
        </>
    )
}

export default Table