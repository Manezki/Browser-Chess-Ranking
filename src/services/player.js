import { v4 as uuidv4 } from 'uuid'

/*
Players have name, elo, id
*/

export const getAll = () => {
  const playersData = JSON.parse(localStorage.getItem('players')) || []
  return playersData
}

export const addNew = ({ name }) => {
  const playersData = getAll()
  const newPlayer = {
    name,
    elo: 1200,
    id: uuidv4()
  }
  localStorage.setItem('players', JSON.stringify(playersData.concat(newPlayer)))
  return newPlayer
}

export const updatePlayer = (id, { elo }) => {
  const playersData = getAll()
  const updatedPlayersData = playersData.map((oldPlayer) => {
    return (oldPlayer.id === id) ? {
      ...oldPlayer,
      elo: elo || oldPlayer.elo,
    } : oldPlayer
  })

  localStorage.setItem('players', JSON.stringify(updatedPlayersData))
  return updatedPlayersData.find((player) => player.id === id)
}
