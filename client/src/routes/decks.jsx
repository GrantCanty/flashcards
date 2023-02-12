import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Modal from '../modal'
import './deck.css'
import './main.css'
import FlashcardList from '../flashcard-list'

const Decks = ({show, toggleShow}) => {
    const apiUrl = 'http://localhost:8080/api/decks'
    
    const [deckNameResponse, setDeckNameResponse] = React.useState([])
    
    React.useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setDeckNameResponse(response.data)
        })
    }, [])

    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    <h1>Your Flashcard Decks</h1>
                    <button>Add Deck</button>
                </div>
                <FlashcardList deckNameResponse={deckNameResponse} toggleShow={toggleShow} />
                <Modal show={show} close={toggleShow} />
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )

}

export default Decks;