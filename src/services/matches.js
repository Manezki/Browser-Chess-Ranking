import { v4 as uuidv4 } from 'uuid'

/* Matches have:
  'datetime'
  'player1'
  'player2'
  'outcome': 1. => player1 win, 0. player2 win
*/

export const getAll = () => {
  const matchesData = JSON.parse(localStorage.getItem('matches')) || []
  return matchesData
}

export const addNew = (datetime, player1, player2, outcome) => {
  const matches = getAll()
  const newMatch = {
    datetime,
    player1,
    player2,
    outcome,
    id: uuidv4()
  }
  localStorage.setItem('matches', JSON.stringify(matches.concat(newMatch)))
  return newMatch
}
