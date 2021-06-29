
export const getAll = () => {
  const playersData = JSON.parse(localStorage.getItem('players')) || []
  return playersData
}
