
import React from 'react';

const Form = (props) => {

    const {players} = props

    const addMatch = (event) => {
        event.preventDefault()
        console.log(event);
        console.log(document.getElementById("player1").value)
    }

    return (
        <form onSubmit={addMatch}>
            <div>
                <label htmlFor="player1">Player 1: </label>
                <select name="player1" id="player1">
                    {players.map(player => <option key={player.id} value={player.name}>{player.name}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="player2">Player 2: </label>
                <select name="player2" id="player2">
                    {players.map(player => <option key={player.id} value={player.name}>{player.name}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="outcome">Outcome: </label>
                <select name="outcome" id="outcome">
                    <option value="player1">Winner is player 1</option>
                    <option value="player2">Winner is player 2</option>
                    <option value="tie">It's a tie</option>
                </select>
            </div>
            <div>
                <button type="submit">+</button>
            </div>
        </form>    
    )

}

export default Form