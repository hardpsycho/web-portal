import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export function ThemeDecorator(theme: Theme) {
    return function ThemeDecoratorInside(Story: Story): JSX.Element {
        return (
            <div className={`app ${theme}`}>
                <Story />
            </div>
        )
    }
}
