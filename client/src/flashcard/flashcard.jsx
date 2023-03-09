import React from 'react'
import './flashcard.css'

const Flashcard = ({deckInfo, cardPos, setCardPos, showTitle, toggleShowTitle}) => {

    //const keys = [...deckInfo.keys()]
    console.log("deckInfo: ", deckInfo)
    let card = new Map(Object.entries(deckInfo[cardPos]))

    return (
        <div className="flashcard" onClick={toggleShowTitle}>
            { showTitle ? <h2>{card.title}</h2> : <h2>{card.description}</h2> }
            <button className='new-card' onClick={(e) => {e.stopPropagation(); setCardPos(-1)}} >-</button>
            <button className='new-card' onClick={(e) => {e.stopPropagation(); setCardPos(1)}}  >+</button>
        </div>
    )
}

export default Flashcard;