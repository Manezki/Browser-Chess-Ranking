
export const getAll = () => {
  const matchesData = JSON.parse(localStorage.getItem('matches')) || []
  return matchesData
}
