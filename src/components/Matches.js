
import React from 'react'
import AddMatchForm from './AddMatchForm'

export const outcomeText = (match) => {
  if (typeof match.outcome === 'undefined') {
    console.log('Missing outcome on match object')
    return 'Unknown'
  }

  switch (String(match.outcome)) {
  case '1':
    return 'Player 1 won'
  case '0':
    return 'Player 2 won'
  case '0.5':
    return 'It was a tie'
  default:
    console.log('Unknown match outcome')
    return 'Unknown'
  }
}

const DisplayMatches = ({ history, players, setPlayers, setHistory }) => {

  return (
    <div>
      <table className="center">
        <thead>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Outcome</th>
          </tr>
        </thead>
      </table>
      <AddMatchForm players={players} history={history} setPlayers={setPlayers} setHistory={setHistory}/>
      <table className="center">
        <tbody>
          {[...history].sort((l, r) => -(l.datetime - r.datetime)).map(match => {
            return (<tr key={match.id}>
              <td>{match.player1.name}</td>
              <td>{match.player2.name}</td>
              <td>{outcomeText(match)}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayMatches