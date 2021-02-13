import React, { useEffect, useState } from "react";
import * as playerAPI from "./services/player";
import DisplayPlayers from "./components/RankPlayers"


const App = () => {
  const [players, setPlayers] = useState([{}])
  // History entries with 'datetime', 'player1', 'player2', 'winner'
  const [history, setHistory] = useState([])

  useEffect( () => {
    playerAPI.getAll()
      .then( (players) => {
        setPlayers(players)
      })
  }, [])

  return (
    <DisplayPlayers players={players} />
  )
}

export default App;
