/**
* @jest-environment jsdom
*/

import React from 'react'
import { render, screen } from '@testing-library/react'
import PlayerDisplay from './PlayerDisplay'

const testPlayer = {
  name: 'A', elo: 1200, id: 1
}

describe('<PlayerDisplay >', () => {

  test('Rounds ELO to 2 decimal points, when more decimals are present', () => {

    render(
      <table>
        <tbody>
          <PlayerDisplay player={{ ...testPlayer, elo: 1200.1234 }}/>
        </tbody>
      </table>
    )

    expect(screen.getByText(/1200/).textContent).toEqual('1200.12')
  })

  test('ELO does not have trailing 0s when decimals are not present', () => {

    render(
      <table>
        <tbody>
          <PlayerDisplay player={{ ...testPlayer, elo: 1200 }}/>
        </tbody>
      </table>
    )

    expect(screen.getByText(/1200/).textContent).toEqual('1200')
  })
})
