import "./card.css"

const EditFlashcard = ({flaschard, editState}) => {
    flaschard = new Map(Object.entries(flaschard))
    return (
            <div className="review-flashcard" >
                <div className="review-flashcard-topic">
                    <input type="text" name="topic" value={flaschard.get("topic")} onChange={ (event) => { editState(flaschard.get("id"), event) } } ></input>
                </div>
                <div className="review-flashcard-desc">
                    <input type="text" name="description" value={flaschard.get("description")} onChange={ (event) => { editState(flaschard.get("id"), event) } } ></input>
                </div>
            </div>
    )
}

export default EditFlashcard;