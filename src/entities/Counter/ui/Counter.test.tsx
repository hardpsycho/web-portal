import { fireEvent, screen } from '@testing-library/react'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { renderWithProviders } from 'shared/libs/tests/renderWithProviders'
import { Counter } from './Counter'

const initialState: DeepPartial<StateSchema> = {
    counter: { value: 100 }
}

describe('Sidebar', () => {
    test('first test', () => {
        renderWithProviders(<Counter />, { initialState: initialState })
        expect(screen.getByTestId('value-title')).toHaveTextContent('100')
    })

    test('increment', () => {
        renderWithProviders(<Counter />, { initialState: initialState })
        fireEvent.click(screen.getByTestId('increment'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('101')
    })

    test('decrement', () => {
        renderWithProviders(<Counter />, { initialState: initialState })
        fireEvent.click(screen.getByTestId('decrement'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('99')
    })
})
