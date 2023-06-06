import { ProvidersDecorator } from 'shared/config/stoybook/decorators/global/ProvidersDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

export const decorators = [ProvidersDecorator]
