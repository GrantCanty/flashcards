import './flashcard.css'

const Flashcard = ({deckInfo, deckLength}) => {

    return (
        <div className="flashcard">
            <h2>{deckLength}</h2>
        </div>
    )
}

export default Flashcard;