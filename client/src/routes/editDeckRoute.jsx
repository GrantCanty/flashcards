import React from "react"
import { Outlet } from 'react-router-dom'
import axios from "axios"
import EditFlashcard from "../editFlashcard/editFlashcard"

import './editDeckRoute.css'

const EditDeckRoute = ({deckNames, deckID}) => {
    const url = "http://localhost:8080/api/deck/" + deckID
    
    const [deckInfo, setDeckInfo] = React.useState([])

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckInfo(response.data)
        })
    }, [url])

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
        setDeckInfo(prevState => ([
            ...prevState.map(card => ({
                ...card = new Map(Object.entries(card)),
                return :card.get("id") === index
                ? card.set([e.target.name], e.target.value)
                : card
            }))
        ]))
    }

    function saveCards() {
        //console.log("saveCards: ", deckNames.get(String(deckID)), deckID)
        axios.post(url, deckInfo, { headers:{"Access-Control-Allow-Origin": "*"}, params:{"deckName": deckNames.get(deckID)}})
        /*axios.post(url, deckInfo).then((response) => {
            console.log(response)
        })*/
    }

    
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <h1>Edit Flashcards</h1>
                    <button onClick={newCard} >Add Card</button>
                    <button onClick={saveCards} >Save Cards</button>
                </div>
                <ul className="decks">
                    {deckInfo.map((flaschard, num) => {
                            return (
                                <li className="review-flashcard-wrapper"> 
                                    <EditFlashcard key={num} index={num} flaschard={flaschard} change={handleDeckInfoChange} />
                                </li>
                            )
                        }
                    )}
                </ul>

            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default EditDeckRoute;