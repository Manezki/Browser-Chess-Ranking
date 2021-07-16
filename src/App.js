import React, { useEffect, useState } from 'react'
import * as playerAPI from './services/player'
import * as matchAPI from './services/matches'
import PlayersDisplay from './components/PlayersDisplay'
import MatchesDisplay from './components/MatchesDisplay'

const App = () => {
  const [players, setPlayers] = useState([])
  const [history, setHistory] = useState([])

  useEffect( () => {
    setPlayers(playerAPI.getAll())
    setHistory(matchAPI.getAll())
  }, [])

  return (
    <div>
      <h1>Friendly Browser Ranking</h1>
      <PlayersDisplay players={players} setPlayers={setPlayers} />
      <hr></hr>
      <MatchesDisplay history={history} players={players} setPlayers={setPlayers} setHistory={setHistory}/>
    </div>
  )
}

export default App
