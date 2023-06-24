import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { DeepPartial } from '@reduxjs/toolkit'
import { render, RenderResult } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import i18n from 'shared/config/i18n/configForTest'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

interface renderOptionsProps {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const renderWithProviders = (
    children: ReactElement,
    options: renderOptionsProps
): RenderResult => {
    const { route = '/', initialState } = options

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider>{children}</ThemeProvider>
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
