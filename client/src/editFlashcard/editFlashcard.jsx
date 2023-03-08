import "./card.css"

const EditFlashcard = ({index, flaschard, change}) => {
    flaschard = new Map(Object.entries(flaschard))
    return (
        <>
            <div className="review-flashcard-wrapper">
                <div className="review-flashcard" >
                    <div className="review-flashcard-topic">
                        <input type="text" name="topic" value={flaschard.get("topic")} onChange={ (event) => { change(index, event) } } ></input>
                    </div>
                    <div className="review-flashcard-desc">
                        <input type="text" name="description" value={flaschard.get("description")} onChange={ (event) => { change(index, event) } } ></input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditFlashcard;