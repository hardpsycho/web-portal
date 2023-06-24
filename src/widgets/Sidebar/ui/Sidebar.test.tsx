import { screen } from '@testing-library/react'
import { renderWithProviders } from 'shared/libs/tests/renderWithProviders'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('first test', () => {
        renderWithProviders(<Sidebar />, {})
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
