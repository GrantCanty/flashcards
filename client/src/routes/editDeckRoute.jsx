import React from "react"
import axios from "axios"
import EditFlashcard from "../editFlashcard/editFlashcard"

const EditDeckRoute = ({deckID}) => {
    const url = "http://localhost:8080/api/deck/" + deckID
    
    const [deckInfo, setDeckInfo] = React.useState([])

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckInfo(response.data)
        })
    }, [])

    function newCard() {
        const tmpDeck = new Map()
        tmpDeck.set("topic", "")
        tmpDeck.set("description", "")
        tmpDeck.set("id", deckInfo.length++)

        // create brand new array. loop through deckInfo and add elements to new array
        let tmpArr = []
        deckInfo.map((card) => {
            tmpArr.push(card)
        })
        tmpArr.push(tmpDeck)

        setDeckInfo(tmpArr)
    }

    function handleDeckInfoChange(index, e) {
        console.log(`${[e.target.name]}: ${e.target.value} ${index} `)
        setDeckInfo(prevState => ({
            ...prevState.map(card => ({
                ...card = new Map(Object.entries(card)),
                ...card.get("id") === index
                ? card.set([e.target.name], e.target.value)
                : card
            }))
        }))
        /*let tmpDeckInfo = []
        tmpDeckInfo = deckInfo
        for(let i = 0; i < tmpDeckInfo.length; i++) {
            //console.log(tmpDeckInfo[i].get("id") === index)
            if(tmpDeckInfo[i].get("id") === index) {
                tmpDeckInfo[i].set(e.target.name, e.target.value)
            }
        }
        console.log("tmpDeckInfo: ", tmpDeckInfo)

        setDeckInfo(tmpDeckInfo)*/
    }

    
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <h1>Your Flashcards</h1>
                    <button onClick={newCard} >Add Card</button>
                </div>
                {console.log("is array: ", Array.isArray(deckInfo))}
                {deckInfo.map((flaschard, num) => {
                        return <EditFlashcard key={num} index={num} flaschard={flaschard} change={handleDeckInfoChange} />
                    }
                )}

            </div>
        </>
    )
}

export default EditDeckRoute;