
import React from 'react';

const PlayerDisplay = (props) => {

    const {player} = props

    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.elo}</td> 
        </tr>
    )

}

export default PlayerDisplay