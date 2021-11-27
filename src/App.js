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
    <div class="main-container">
      <div class="title-container">
        <h1>Elo ranking</h1>
        <p class="subtitle">No login required, and your data is never sent anywhere.</p>
      </div>
      <PlayersDisplay players={players} setPlayers={setPlayers} />
      <hr></hr>
      <MatchesDisplay matches={matches} players={players} setPlayers={setPlayers} setMatches={setMatches}/>
    </div>
  )
}

export default App
