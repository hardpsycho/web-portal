import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/configForTest'

export const renderWithProviders = (children: ReactElement): RenderResult => {
    return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>{children}</ThemeProvider>
            </I18nextProvider>
        </MemoryRouter>
    )
}
