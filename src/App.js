import React, { useEffect, useState } from 'react'
import * as playerAPI from './services/player'
import * as matchAPI from './services/matches'
import DisplayPlayers from './components/DisplayPlayers'
import Matches from './components/Matches'

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
      <DisplayPlayers players={players} setPlayers={setPlayers} />
      <hr></hr>
      <Matches history={history} players={players} setPlayers={setPlayers} setHistory={setHistory}/>
    </div>
  )
}

export default App
