/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

jest.spyOn(window.localStorage.__proto__, 'setItem')
jest.spyOn(window.localStorage.__proto__, 'getItem')

describe('<App >', () => {

  test('Renders succesfully', () => {
    render(<App />)
  })
})
