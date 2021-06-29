
import React from 'react'
import AddMatchForm from './AddMatchForm'

const DisplayMatches = (props) => {

  const { history, players, setPlayers, setHistory } = props

  return (
    <div>
      <table className="center">
        <thead>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Outcome</th>
            <th></th>
          </tr>
        </thead>
      </table>
      <AddMatchForm players={players} setPlayers={setPlayers} setHistory={setHistory}/>
      <table className="center">
        <tbody>
          {history.map(match => {
            return (<tr key={match.id}>
              <td>{match.player1}</td>
              <td>{match.player2}</td>
              <td>{match.outcome === 'player1' ? 'Player 1 won' : match.outcome === 'player2' ? 'Player 2 won' : 'It was a tie'}</td>
              <td></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayMatches