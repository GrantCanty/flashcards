import React from 'react'
import './flashcard.css'

const Flashcard = ({deckInfo, cardPos, setCardPos, showTitle, toggleShowTitle}) => {

    /*const [showTitle, setShowTitle] = React.useState(true)
    function toggleShowTitle() {
        setShowTitle(!showTitle)

    }*/

    const keys = [...deckInfo.keys()]

    return (
        <div className="flashcard" onClick={toggleShowTitle}>
            { showTitle ? <h2>{keys[cardPos]}</h2> : <h2>{deckInfo.get(keys[cardPos])}</h2> }
            <button className='new-card' onClick={(e) => {e.stopPropagation(); setCardPos(-1)}} >-</button>
            <button className='new-card' onClick={(e) => {e.stopPropagation(); setCardPos(1)}}  >+</button>
        </div>
    )
}

export default Flashcard;