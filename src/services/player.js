
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
    id: Math.max(playersData.map(player => Number(player.id))) + 1
  }
  localStorage.setItem('players', JSON.stringify(playersData.concat(newPlayer)))
  return newPlayer
}
