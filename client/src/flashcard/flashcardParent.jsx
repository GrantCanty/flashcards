import Flashcard from "./flashcard";


function FlashcardParent(props) {
    
    
    const keys = [...props.deckInfo.keys()]
    const deckLength = keys.length

    return (
        <div >
            <Flashcard deckInfo={props.deckInfo} deckLength={deckLength} />
        </div>
    )

}

export default FlashcardParent;