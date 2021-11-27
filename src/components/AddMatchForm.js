
import React, { useState } from 'react'
import * as playerAPI from '../services/player'
import * as matchAPI from '../services/matches'
import AddButton from './AddButton'

const eloUpdate = (elo1, elo2, outcome) => {
  // Outcome is numerically encoded. 0 for player1 winning, 0.5 for a tie, 1.0 for player2 winning.
  const P1 = (1.0 / (1.0 + Math.pow(10, ((elo2 - elo1) / 400))))
  const P2 = (1.0 / (1.0 + Math.pow(10, ((elo1 - elo2) / 400))))

  const K = 40

  const newElo1 = elo1 + K*(outcome - P1)
  const newElo2 = elo2 + K*(Math.abs(outcome - 1.) - P2)

  return [newElo1, newElo2]
}

const AddMatchForm = ({ players, setPlayers, matches, setMatches }) => {

  const [matchPlayer1, setMatchPlayer1] = useState(undefined)
  const [matchPlayer2, setMatchPlayer2] = useState(undefined)
  const [outcome, setOutcome] = useState(0.5)

  // players props can be undefined on the first render - update matchPlayers when players are available
  if (players.length === 1 && (matchPlayer1 === undefined)) {
    setMatchPlayer1(players[0].id)
  } else if (players.length >= 2 && (matchPlayer1 === undefined || matchPlayer2 === undefined)) {
    setMatchPlayer1(players[0].id)
    setMatchPlayer2(players[1].id)
  }

  const addMatch = (event) => {
    event.preventDefault()

    if (matchPlayer1 === matchPlayer2) {
      console.log('Prevented an attempted to add a match with player against self')
      return
    } else if (!matchPlayer1 || !matchPlayer2) {
      console.log('Prevented an attempted to add a match with insufficient players')
      return
    }

    const player1 = players.find( (player) => player.id === matchPlayer1 )
    const player2 = players.find( (player) => player.id === matchPlayer2 )

    const [elo1, elo2] = eloUpdate(player1.elo, player2.elo, outcome)

    const newMatch = matchAPI.addNew(Date.now(), player1, player2, outcome)
    setMatches(matches.concat([newMatch]))

    const updatedPlayer1 = playerAPI.updatePlayer(player1.id, { elo: elo1 })
    const updatedPlayer2 = playerAPI.updatePlayer(player2.id, { elo: elo2 })

    const updatedPlayers = players.map((player) => {
      switch (player.id) {
      case updatedPlayer1.id:
        return updatedPlayer1
      case updatedPlayer2.id:
        return updatedPlayer2
      default:
        return player
      }
    })

    setPlayers(updatedPlayers)
  }

  return (
    <form onSubmit={addMatch}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="player1"></label>
              <select
                className="select"
                name="player1"
                id="player1"
                value={matchPlayer1}
                onChange={({ target: { value } }) => {setMatchPlayer1(value)}}
                disabled={!matchPlayer1}
              >
                {players.filter((player) => player.id !== matchPlayer2).map(player => <option key={player.id} value={player.id}>{player.name}</option>)}
              </select>
            </td>
            <td>
              <label htmlFor="player2"></label>
              <select
                className="select"
                name="player2"
                id="player2"
                value={matchPlayer2}
                onChange={({ target: { value } }) => {setMatchPlayer2(value)}}
                disabled={!matchPlayer2}
              >
                {players.filter((player) => player.id !== matchPlayer1).map(player => <option key={player.id} value={player.id}>{player.name}</option>)}
              </select>
            </td>
            <td>
              <div id="addMatchSubmissionContainer">
                <label htmlFor="outcome"></label>
                <select
                  className="select"
                  name="outcome"
                  id="outcome"
                  value={outcome}
                  onChange={({ target: { value } }) => {setOutcome(value)}}
                  disabled={(!matchPlayer1 || !matchPlayer2)}
                >
                  <option value={.5}>It&apos;s a tie</option>
                  <option value={1.}>Winner is player 1</option>
                  <option value={0.}>Winner is player 2</option>
                </select>
                {/* Disable with insufficient selections */}
                <AddButton onClick={addMatch} title="Submit new match"/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )

}

export default AddMatchForm