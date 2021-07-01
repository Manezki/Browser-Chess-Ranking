
import React from 'react'
import * as playerAPI from '../services/player'
import * as matchAPI from '../services/matches'
import AddButton from './AddButton'

const eloUpdate = (elo1, elo2, outcome) => {
  const P1 = (1.0 / (1.0 + Math.pow(10, ((elo2 - elo1) / 400))))
  const P2 = (1.0 / (1.0 + Math.pow(10, ((elo1 - elo2) / 400))))

  const K = 40

  const newElo1 = elo1 + K*(outcome - P1)
  const newElo2 = elo2 + K*(Math.abs(outcome - 1.) - P2)

  return [newElo1, newElo2]
}

const AddMatchForm = ({ players, setPlayers, setHistory }) => {

  const addMatch = (event) => {
    event.preventDefault()

    const player1 = players.find( (player) => player.name === document.getElementById('player1').value )
    const player2 = players.find( (player) => player.name === document.getElementById('player2').value )

    const outcome = document.getElementById('outcome').value
    const outcomeNum = (outcome === 'player1') ? 1 : (outcome === 'player2') ? 0 : 0.5

    const [elo1, elo2] = eloUpdate(player1.elo, player2.elo, outcomeNum)

    const newPlayer1 = { ...player1, 'elo': elo1 }
    const newPlayer2 = { ...player2, 'elo': elo2 }

    const match = { 'datetime': Date.now(),
      'player1': player1.name,
      'player2': player2.name,
      'outcome': outcome
    }

    playerAPI.update(newPlayer1.id, newPlayer1).then( () => {
      playerAPI.update(newPlayer2.id, newPlayer2).then( () => {
        matchAPI.add(match).then( () => {
          matchAPI.getAll().then( (response) => {
            setHistory(response)
            playerAPI.getAll().then( (response) => {
              setPlayers(response)
            })
          })
        })
      })
    })
  }

  return (
    <form onSubmit={addMatch}>
      <table className="center">
        <tbody>
          <tr>
            <td>
              <label htmlFor="player1"></label>
              <select className="select" name="player1" id="player1">
                {players.map(player => <option key={player.id} value={player.name}>{player.name}</option>)}
              </select>
            </td>
            <td>
              <label htmlFor="player2"></label>
              <select className="select" name="player2" id="player2">
                {players.map(player => <option key={player.id} value={player.name}>{player.name}</option>)}
              </select>
            </td>
            <td>
              <label htmlFor="outcome"></label>
              <select className="select" name="outcome" id="outcome">
                <option value="player1">Winner is player 1</option>
                <option value="player2">Winner is player 2</option>
                <option value="tie">It&apos;s a tie</option>
              </select>
            </td>
            <td>
              <AddButton onClick={addMatch} />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )

}

export default AddMatchForm