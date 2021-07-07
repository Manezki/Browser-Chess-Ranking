/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DisplayPlayers from './DisplayPlayers'

jest.spyOn(window.localStorage.__proto__, 'setItem')
jest.spyOn(window.localStorage.__proto__, 'getItem')

const testPlayer = {
  name: 'A',
  elo: 1200,
  id: 1
}

describe('<DisplayPlayer />', () => {

  describe('On an empty ranking', () => {
    let setPlayers
    let players

    beforeEach(() => {
      players = [testPlayer]
      setPlayers = jest.fn((newPlayers) => {
        players = newPlayers
      })

      window.localStorage.clear()
      window.localStorage.setItem('players', JSON.stringify(players))
    })

    describe('Adding a new player', () => {
      test('With valid arguments is appended to the \'players\' state', () => {
        const newPlayerName = 'B'

        render(<DisplayPlayers players={players} setPlayers={setPlayers}/>)

        userEvent.type(screen.getByLabelText('New player'), newPlayerName)
        userEvent.click(screen.getByTitle(/Submit new player/))

        expect(setPlayers).toHaveBeenCalledWith(
          expect.arrayContaining([
            expect.objectContaining({
              name: newPlayerName,
              elo: 1200
            })
          ])
        )
      })
    })
  })
})
