/**
 * @jest-environment jsdom
 */

import * as playerAPI from './player'

jest.spyOn(window.localStorage.__proto__, 'setItem')
jest.spyOn(window.localStorage.__proto__, 'getItem')

const testPlayer = {
  name: 'A',
  elo: 1200,
  id: 1
}

describe('Player service', () => {

  describe('addNew', () => {
    beforeEach(() => {
      window.localStorage.clear()
      window.localStorage.setItem('players', JSON.stringify([testPlayer]))
    })

    test('Returned player has name, elo, and ID', () => {
      const newPlayer = playerAPI.addNew({ name: 'B' })
      expect(newPlayer.name).toBe('B')
      expect(newPlayer.elo).toBe(1200)
      expect(newPlayer.id).toBeDefined()
    })

    test('Generates a unique ID to the new players', () => {
      const newPlayerLeft = playerAPI.addNew({ name: 'B' })
      const newPlayerRight = playerAPI.addNew({ name: 'C' })

      expect(newPlayerLeft.id).not.toBe(newPlayerRight.id)
    })
  })

  describe('updatePlayer', () => {
    test('Updates a player in localStorage with matching id', () => {
      window.localStorage.clear()
      window.localStorage.setItem('players', JSON.stringify([testPlayer]))

      const updatedPlayer = { ...testPlayer, elo: 1220 }
      playerAPI.updatePlayer(updatedPlayer.id, { elo: 1220 })

      expect(JSON.parse(window.localStorage.getItem('players'))[0]).toEqual(updatedPlayer)
    })

    test('Returns the updated player', () => {
      window.localStorage.clear()
      window.localStorage.setItem('players', JSON.stringify([testPlayer]))

      const updatedPlayer = playerAPI.updatePlayer(testPlayer.id, { elo: 1220 })

      expect(updatedPlayer.elo).toBe(1220)
    })

    test('Does not overwrite unupdated properties', () => {
      window.localStorage.clear()
      window.localStorage.setItem('players', JSON.stringify([testPlayer]))

      playerAPI.updatePlayer(testPlayer.id, {})

      expect(JSON.parse(window.localStorage.getItem('players'))[0].elo).toBe(1200)
      expect(JSON.parse(window.localStorage.getItem('players'))[0].name).toBe('A')
      expect(JSON.parse(window.localStorage.getItem('players'))[0].id).toBe(testPlayer.id)
    })
  })
})
