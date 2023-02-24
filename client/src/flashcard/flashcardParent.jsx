import React from "react";
import Flashcard from "./flashcard";


function FlashcardParent(props) {
    const [showTitle, setShowTitle] = React.useState(true)

    function toggleShowTitle() {
        setShowTitle(!showTitle)

    }
    

    const keys = [...props.deckInfo.keys()]
    const deckLength = keys.length

    const [cardPos, setCardPos] = React.useState(Number)

    function newCardPos(num) {
        if (num === -1 && cardPos > 0) {
            setCardPos(cardPos + num)
            setShowTitle(true)
        } 
        if (num === 1 && cardPos < deckLength -1) {
            setCardPos(cardPos + num)
            setShowTitle(true)
        }
    }

    

    return (
        <div >

            <Flashcard deckInfo={props.deckInfo} cardPos={cardPos} setCardPos={newCardPos} showTitle={showTitle} toggleShowTitle={toggleShowTitle} />
        </div>
    )

}

export default FlashcardParent;