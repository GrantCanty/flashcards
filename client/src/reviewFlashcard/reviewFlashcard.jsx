const ReviewFlashcard = ({num, topic, description}) => {
    return (
        <>
            <div className="review-flashcard-wrapper">
                <div className="review-flashcard" >
                    <div className="review-flashcard-title">
                        <h2>Flashcard {num}</h2>
                    </div>
                    <div className="review-flashcard-topic">
                        <input type="text" value={topic}></input>
                        {/*<p>{topic}</p>*/}
                    </div>
                    <div className="review-flashcard-desc">
                        <input type="text" value={description}></input>
                        {/*<p>{description}</p>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewFlashcard;