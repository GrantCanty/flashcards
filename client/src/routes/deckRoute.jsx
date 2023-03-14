import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Modal from '../modal'
import './deck.css'
import './main.css'
import DeckList from '../deck/deckList'

const DeckRoute = ({deckNames, setDeckNames, show, toggleShow, deckID, setDeckID, editDeckRoute, reviewDeckRoute, increaseReviewedCount}) => {
    const url = 'http://localhost:8080/api/decks'
    
    
    
    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckNames(new Map(Object.entries(response.data)))
        })
    }, [])

    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    <h1>Your Flashcard Decks</h1>
                    <button>Add Deck</button>
                </div>
                <DeckList deckNameResponse={deckNames} toggleShow={toggleShow} setDeckID={setDeckID} />
                <Modal show={show} close={toggleShow} onEditClick={editDeckRoute} onReviewClick={reviewDeckRoute} setID={deckID} increaseReviewedCount={increaseReviewedCount} />
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )

}

export default DeckRoute;