
import React from 'react'

const PlayerDisplay = (props) => {

  const { player } = props

  return (
    <tr>
      <td>{player.ranking}</td>
      <td>{player.name}</td>
      {/* TODO: Limit the number of decimal points */}
      <td>{player.elo}</td>
    </tr>
  )

}

export default PlayerDisplay