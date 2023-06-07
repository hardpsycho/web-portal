import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/configForTest'

interface renderOptionsProps {
    route: string
}

export const renderWithProviders = (
    children: ReactElement,
    options: renderOptionsProps = { route: '/' }
): RenderResult => {
    const { route } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>{children}</ThemeProvider>
            </I18nextProvider>
        </MemoryRouter>
    )
}
