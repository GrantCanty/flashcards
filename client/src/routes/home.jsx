import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import './main.css'

function Home() {
  const userDataUrl = 'http://localhost:8080/api/user'
  const [userData, setUserData] = React.useState(new Map())

  React.useEffect(() => {
    axios.get(userDataUrl).then((response) => {
      setUserData(response.data)
    })
  }, [])

  const deckDataUrl = 'http://localhost:8080/api/deckcount'
  const [deckData, setDeckData] = React.useState(Number)

  React.useEffect(() => {
    axios.get(deckDataUrl).then((response) => {
      setDeckData(response.data)
    })
  }, [])
  
  return (
      <>
        <div className='wrapper'>
          { userData.Name ? <h2>{ userData.Name }</h2> : null }
          { userData.About ? <h5>{  userData.About }</h5> : null }
          { deckData.deckCount ? <h5>You have {deckData.deckCount} flashcard decks</h5> : null }
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
}
export default Home;

//{ deckData ? <h4>You have {deckData} flashcard decks</h4> : null }