import { MemoryRouter } from 'react-router'
import { fn } from '@storybook/test'
import React from 'react'

export const decorators = [
  Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
]

export const parameters = {
  actions: {
    handles: {
      onClick: fn(),
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const tags = ['autodocs']