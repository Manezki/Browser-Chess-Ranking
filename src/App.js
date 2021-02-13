import React, { useEffect, useState } from "react"
import * as playerAPI from "./services/player"
import DisplayPlayers from "./components/DisplayPlayers"


const App = () => {
  const [players, setPlayers] = useState([])
  // History entries with 'datetime', 'player1', 'player2', 'winner'
  const [history, setHistory] = useState([])

  useEffect( () => {
    playerAPI.getAll()
      .then( (players) => {
        setPlayers(players)
      })
  }, [])

  return (
    <div>
      <h1>Friendly Chess Competition Amsterdamseweg</h1>
      <DisplayPlayers players={players} />
    </div>


  )
}

export default App
