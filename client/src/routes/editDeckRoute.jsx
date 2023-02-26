import React from "react"
import axios from "axios"
import ReviewFlashcard from "../reviewFlashcard/reviewFlashcard"

const EditDeckRoute = ({deckID}) => {
    const url = "http://localhost:8080/api/deck/" + deckID

    const [deckInfo, setDeckInfo] = React.useState(new Map())

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckInfo(new Map(Object.entries(response.data)))
        })
    }, [])
    
    return (
        <>
            <div className="wrapper">
                <div className="header">
                <h1>Your Flashcards</h1>
                    <button>Add Card</button>
                </div>
                {
                    [...deckInfo.keys()].map((card, num) => {
                        //console.log(deckInfo.get(card), num)
                        return <ReviewFlashcard num={num} topic={card} description={deckInfo.get(card)} />
                    })
                }
            </div>
        </>
    )
}

export default EditDeckRoute;