import Flashcard from "./flashcard";

const FlashcardList = ({deckNameResponse, toggleShow}) => {
    return (
        <div className='flashcard-list'>
            {deckNameResponse.map((name, i) => {
                return <Flashcard className="flashcard-item" name={name} key={i} id={`id${i%5}`} toggleShow={toggleShow} />
                })
            }
        </div>
    )
}

export default FlashcardList;