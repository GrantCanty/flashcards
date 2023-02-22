import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Modal from '../modal'
import './deck.css'
import './main.css'
import DeckList from '../deck/deckList'

const DeckRoute = ({show, toggleShow, deckID, setDeckID, editDeckRoute, reviewDeckRoute}) => {
    const url = 'http://localhost:8080/api/decks'
    
    const [deckNameResponse, setDeckNameResponse] = React.useState(new Map())
    
    React.useEffect(() => {
        axios.get(url).then((response) => {
            setDeckNameResponse(new Map(Object.entries(response.data)))
        })
    }, [])

    //const [editOrReviewID, setEditOrReviewID] = React.useState(Number)

    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    <h1>Your Flashcard Decks</h1>
                    <button>Add Deck</button>
                </div>
                <DeckList deckNameResponse={deckNameResponse} toggleShow={toggleShow} setDeckID={setDeckID} />
                <Modal show={show} close={toggleShow} onEditClick={editDeckRoute} onReviewClick={reviewDeckRoute} setID={deckID} />
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )

}

export default DeckRoute;