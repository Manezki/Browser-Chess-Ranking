
import React from 'react'

const PlayerDisplay = (props) => {

  const { player } = props

  return (
    <tr>
      <td>{player.ranking}</td>
      <td>{player.name}</td>
      <td>{Math.round(Number(player.elo)*100)/100}</td>
    </tr>
  )
}

export default PlayerDisplay
