import React, { useEffect, useState } from 'react'
import * as playerAPI from './services/player'
import * as matchAPI from './services/matches'
import PlayersDisplay from './components/PlayersDisplay'
import MatchesDisplay from './components/MatchesDisplay'

const App = () => {
  const [players, setPlayers] = useState([])
  const [matches, setMatches] = useState([])

  useEffect( () => {
    setPlayers(playerAPI.getAll())
    setMatches(matchAPI.getAll())
  }, [])

  return (
    <div className="main-container">
      <div className="title-container">
        <h1>Elo ranking</h1>
        <p className="subtitle">No login required, and your data is never sent anywhere.</p>
      </div>
      <PlayersDisplay players={players} setPlayers={setPlayers} />
      <hr></hr>
      <MatchesDisplay matches={matches} players={players} setPlayers={setPlayers} setMatches={setMatches}/>
      <footer>
        <div className="warning">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="#DEBB00" strokeOpacity="0.8" strokeWidth="2"/>
            <circle cx="8" cy="12" r="1" fill="#DEBB00" fillOpacity="0.8"/>
            <path d="M9 4H7L8 9L9 4Z" fill="#DEBB00" fillOpacity="0.8"/>
            <path d="M7 3.5C6.8502 3.5 6.7083 3.56716 6.61333 3.68301C6.51836 3.79885 6.48033 3.95117 6.50971 4.09806L7.50971 9.09806C7.55645 9.33177 7.76166 9.5 8 9.5C8.23834 9.5 8.44355 9.33177 8.49029 9.09806L9.49029 4.09806C9.51967 3.95117 9.48164 3.79885 9.38667 3.68301C9.2917 3.56716 9.1498 3.5 9 3.5H7Z" stroke="#DEBB00" strokeOpacity="0.8" strokeLinejoin="round"/>
          </svg>
          <p>
            Clearing your browser cache will delete the ranking!
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
