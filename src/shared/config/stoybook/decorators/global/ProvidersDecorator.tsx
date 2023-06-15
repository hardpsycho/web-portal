import { ReactElement, Suspense } from 'react'
import { Story } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import i18n from 'shared/config/i18n/config'
import 'app/styles/index.scss'

export function ProvidersDecorator(Story: Story): ReactElement {
    return (
        <MemoryRouter>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>
                    <Suspense fallback="Loading...">
                        <Story />
                    </Suspense>
                </ThemeProvider>
            </I18nextProvider>
        </MemoryRouter>
    )
}
