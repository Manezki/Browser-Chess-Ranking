
import React from 'react'
import Form from "./Form"

const DisplayMatches = (props) => {

    const {history, players, setPlayers, setHistory} = props

    return (
        <div>
            <table className="center">
                <thead>
                    <tr>
                        <th>Player 1</th>
                        <th>Player 2</th>
                        <th>Outcome</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            <Form players={players} setPlayers={setPlayers} history={history} setHistory={setHistory}/>
            <table>
                <tbody>
                    {history.map(match => {
                    <tr>
                        <td>{match.player1}</td>
                        <td>{match.player2}</td>
                        <td>{match.outcome}</td>
                        <td></td>
                    </tr>
                    })}
                </tbody>
            </table>

        </div>


    )

}

export default DisplayMatches