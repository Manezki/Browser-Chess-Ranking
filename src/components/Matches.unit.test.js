/**
 * @jest-environment jsdom
 */

import { outcomeText } from './Matches'

const testMatch = {
  datetime: Date.parse('01-01-2021 00:00:00 GMT'),
  player1: { name: 'A', elo: 1200, id: 1 },
  player2: { name: 'B', elo: 1200, id: 2 },
  outcome: '1',
  id: 1
}

describe('outcomeText', () => {

  test('Defaults to "unknown" if match outcome is not defined', () => {
    const partialMatch = { ...testMatch }
    delete partialMatch.outcome

    expect(outcomeText(partialMatch)).toEqual('Unknown')
  })

  test('Returns a string for valid outcome', () => {
    expect(typeof outcomeText(testMatch)).toEqual('string')
  })

  test('Opposite match outcomes produce different outcomeTexts', () => {
    expect(outcomeText(testMatch)).not.toEqual(outcomeText({ ...testMatch, outcome: '0' }))
  })
})
