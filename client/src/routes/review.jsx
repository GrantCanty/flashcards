import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import './review.css'
import './main.css'

function Review() {
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
                <div className='items'>
                    {deckNameResponse.map((item) => {
                        return <h2 key={item} >{item}</h2>
                })}
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )

}

export default Review;