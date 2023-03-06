import "./card.css"

const EditFlashcard = ({topic, description, change}) => {
    return (
        <>
            <div className="review-flashcard-wrapper">
                <div className="review-flashcard" >
                    <div className="review-flashcard-topic">
                        <input type="text" name={topic} value={topic} onChange={change} ></input>
                    </div>
                    <div className="review-flashcard-desc">
                        <input type="text" name={description} value={description} onChange={change} ></input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditFlashcard;