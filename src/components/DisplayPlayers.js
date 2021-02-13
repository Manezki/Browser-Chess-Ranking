
import React from 'react';
import PlayerDisplay from "./PlayerDisplay"

const DisplayPlayers = (props) => {

    const {players} = props
    const rankedPlayers = players.sort((a, b) => parseFloat(b.elo) - parseFloat(a.elo))

    var i;
    for (i = 0; i < rankedPlayers.length; i++) {
        rankedPlayers[i]["ranking"] = i + 1
    }   

    return (

        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Elo rating</th>
                </tr>
            </thead>
            <tbody>
                {rankedPlayers.map(player => <PlayerDisplay key={player.name} player={player} />)}
            </tbody>

        </table>
        
            
    )

}

export default DisplayPlayers