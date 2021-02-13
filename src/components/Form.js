
import React from 'react';

const eloUpdate = (elo1, elo2, outcome) => {
    const P1 = (1.0 / (1.0 + Math.pow(10, ((elo2 - elo1) / 400))))
    const P2 = (1.0 / (1.0 + Math.pow(10, ((elo1 - elo2) / 400))))

    const K = 40

    const newElo1 = elo1 + K*(outcome - P1)
    const newElo2 = elo2 + K*(Math.abs(outcome - 1.) - P2)

    return [newElo1, newElo2]
  }

const Form = ({players, setPlayers}) => {

    const addMatch = (event) => {
        event.preventDefault()

        const player1 = players.find( (player) => player.name === document.getElementById("player1").value )
        const player2 = players.find( (player) => player.name === document.getElementById("player2").value )

        const outcome = document.getElementById("outcome").value
        const outcomeNum = (outcome === "player1") ? 1 : (outcome === "player2") ? 0 : 0.5

        const [elo1, elo2] = eloUpdate(player1.elo, player2.elo, outcomeNum)

        const newPlayer1 = {...player1, "elo": elo1}
        const newPlayer2 = {...player2, "elo": elo2}

        const newPlayers = players.filter( (player) => !([player1.id, player2.id].includes(player.id)) ).concat([newPlayer1, newPlayer2])

        setPlayers(newPlayers)
    }

    return (
        <form onSubmit={addMatch}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="player1"></label>
                            <select name="player1" id="player1">
                                {players.map(player => <option key={player.id} value={player.name}>{player.name}</option>)}
                            </select>
                        </td>
                        <td>
                            <label htmlFor="player2"></label>
                            <select name="player2" id="player2">
                                {players.map(player => <option key={player.id} value={player.name}>{player.name}</option>)}
                            </select>
                        </td>
                        <td>
                            <label htmlFor="outcome"></label>
                            <select name="outcome" id="outcome">
                                <option value="player1">Winner is player 1</option>
                                <option value="player2">Winner is player 2</option>
                                <option value="tie">It's a tie</option>
                            </select>
                        </td>
                        <td>
                            <button type="submit">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>    
    )

}

export default Form