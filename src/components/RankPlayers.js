
import React from 'react';
import PlayerDisplay from "./PlayerDisplay"

const DisplayPlayers = (props) => {

    const {players} = props
    const rankedPlayers = players.sort((a, b) => parseFloat(b.elo) - parseFloat(a.elo))

    return (

        <table>
            <thead>
                <tr>
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