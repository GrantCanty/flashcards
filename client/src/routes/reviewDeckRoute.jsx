import React from 'react'
import axios from 'axios'
import FlashcardParent from '../flashcard/flashcardParent'

const ReviewDeckRoute = ({deckID}) => {
    const url = 'http://localhost:8080/api/deck/' + deckID

    const [deckInfo, setDeckInfo] = React.useState([])

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckInfo(response.data)
        })
    }, [deckID])
    
    return (
        <div className="wrapper">
            <h1>Review Flashcards</h1>
            <FlashcardParent deckInfo={deckInfo} />
        </div>
    )
}

export default ReviewDeckRoute;