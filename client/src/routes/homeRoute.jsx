import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import './main.css'

function HomeRoute(props) {
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
          <div className='app-data'>
            <div className="user-data rounded col">
            { /*userData.ProfilePhoto ? <image>{ userData.ProfilePhoto }</image> : null */}
              { userData.Name ? <h2>{ userData.Name }</h2> : null }
              { userData.Occupation ? 
                <select name='occupation'>
                  <option value="Student">Student</option>
                </select> : null}
              { userData.About ? <h5>{ userData.About }</h5> : null }
            </div>
            <div className="deck-data rounded col">
              { deckData.deckCount ? <h5>You have { deckData.deckCount } flashcard decks</h5> : null }
              { props.hasOwnProperty('reviewedDeckCount') ? <h5>you've reviewed {props.reviewedDeckCount ===1 ? `${props.reviewedDeckCount} deck` : `${props.reviewedDeckCount} decks`} since logging on </h5> : null }
            </div>
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
}
export default HomeRoute;