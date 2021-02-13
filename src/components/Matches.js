
import React from 'react'
import Form from "./Form"

const DisplayMatches = (props) => {

    const {history, players} = props

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player 1</th>
                        <th>Player 2</th>
                        <th>Outcome</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            <Form players={players} />
            <table>
                <tbody>
                    {history.map(match => {
                    <tr>
                        <td>{match.player1}</td>
                        <td>{match.player2}</td>
                        <td>{match.outcome}</td>
                    </tr>
                    })}
                </tbody>
            </table>

        </div>


    )

}

export default DisplayMatches