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
})
