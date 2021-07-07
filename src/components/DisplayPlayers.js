
import React, { useState } from 'react'
import PlayerDisplay from './PlayerDisplay'
import AddButton from './AddButton'
import * as playerAPI from '../services/player'

const DisplayPlayers = ({ players, setPlayers }) => {

  const [inputName, setInputName] = useState('')

  const rankedPlayers = players.map((player) => {
    return { ...player }
  })
    .sort((a, b) => parseFloat(b.elo) - parseFloat(a.elo))
  rankedPlayers.forEach((player, index) => player.ranking = index + 1)

  const addPlayer = (event) => {
    event.preventDefault()

    if (!inputName) {
      console.log('Empty input name submitted')
      return
    } else if (players.map((player) => player.name).includes(inputName)) {
      console.log('Name already exists')
      return
    }

    const newPlayer = playerAPI.addNew({ name: inputName })
    setPlayers(players.concat(newPlayer))
    setInputName('')
  }

  return (
    <table className="center">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Elo rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rankedPlayers.map(player => <PlayerDisplay key={player.name} player={player} />)}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <label
              htmlFor="newPlayerNameInput">
              New player
            </label>
          </td>
          <td>
            <input
              type="text"
              name="newPlayerNameInput"
              id="newPlayerNameInput"
              value={inputName}
              onChange={ ({ target }) => {
                setInputName(target.value)} }
              style={{ 'width': '80%' }}
            />
          </td>
          <td>
            {/* TODO: Disable when input name is empty */}
            <AddButton onClick={ addPlayer } title="Submit new player"/>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default DisplayPlayers