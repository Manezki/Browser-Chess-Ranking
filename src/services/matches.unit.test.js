/**
 * @jest-environment jsdom
 */

import * as matchesAPI from './matches'

jest.spyOn(window.localStorage.__proto__, 'setItem')
jest.spyOn(window.localStorage.__proto__, 'getItem')

const testMatch = {
  datetime: Date.parse('01-01-2021 00:00:00 GMT'),
  player1: { name: 'A', elo: 1200, id: 1 },
  player2: { name: 'B', elo: 1200, id: 2 },
  outcome: '1',
  id: 1
}

describe('Matches service', () => {

  describe('addNew', () => {
    beforeEach(() => {
      window.localStorage.clear()
      window.localStorage.setItem('matches', JSON.stringify([testMatch]))
    })

    test('Returned match has datetime, player1, player2, outcome, and ID defined', () => {
      const newMatch = matchesAPI.addNew(
        Date.parse('01-01-2021 00:00:00 GMT'),
        { name: 'A', elo: 1200, id: 1 },
        { name: 'B', elo: 1200, id: 2 },
        'player1'
      )
      expect(newMatch.datetime).toBe(1609459200000)
      expect(newMatch.player1).toEqual({ name: 'A', elo: 1200, id: 1 })
      expect(newMatch.player2).toEqual({ name: 'B', elo: 1200, id: 2 })
      expect(newMatch.outcome).toBe('player1')
      expect(newMatch.id).toBeDefined()
    })

    test('Generates a unique ID to the new players', () => {
      const newMatchLeft = matchesAPI.addNew(
        Date.parse('01-01-2021 00:00:00 GMT'),
        { name: 'A', elo: 1200, id: 1 },
        { name: 'B', elo: 1200, id: 2 },
        'player1'
      )
      const newMatchRight = matchesAPI.addNew(
        Date.parse('01-01-2021 00:00:00 GMT'),
        { name: 'A', elo: 1200, id: 1 },
        { name: 'B', elo: 1200, id: 2 },
        'player1'
      )

      expect(newMatchLeft.id).not.toBe(newMatchRight.id)
    })
  })
})
