
import React from 'react'
import PlayerDisplay from './PlayerDisplay'

const DisplayPlayers = ({ players }) => {

  const rankedPlayers = [...players]
    .sort((a, b) => parseFloat(b.elo) - parseFloat(a.elo))
  rankedPlayers.forEach((player, index) => player.ranking = index + 1)

  // TODO: Add player form
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
    </table>
  )
}

export default DisplayPlayers