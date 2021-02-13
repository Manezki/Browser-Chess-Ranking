import React, { useState } from "react";

const App = () => {
  const players, setPlayers = useState([{
      "name": "Janne",
      "elo": 1200
    },
    {
      "name": "Eva",
      "elo": 1200
    }
  ])
  // History entries with 'datetime', 'player1', 'player2', 'winner'
  const history, setHistory = useState([])

  return (
    <div>
    </div>
  )
}

export default App;
