import React from "react"
import axios from "axios"
import EditFlashcard from "../editFlashcard/editFlashcard"

const EditDeckRoute = ({deckID}) => {
    const url = "http://localhost:8080/api/deck/" + deckID

    const [deckInfo, setDeckInfo] = React.useState(new Map())

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckInfo(new Map(Object.entries(response.data)))
        })
    }, [])

    function newCard() {
        setDeckInfo(new Map(deckInfo.set("", "")))
    }

    const handleDeckInfoChange = e => {
        setDeckInfo(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }
    
    return (
        <>
            <div className="wrapper">
                <div className="header">
                <h1>Your Flashcards</h1>
                    <button onClick={newCard} >Add Card</button>
                </div>
                {
                    [...deckInfo.keys()].map((topic, num) => {
                        return <EditFlashcard key={num} topic={topic} description={deckInfo.get(topic)} change={handleDeckInfoChange} />
                    })
                }
            </div>
        </>
    )
}

export default EditDeckRoute;