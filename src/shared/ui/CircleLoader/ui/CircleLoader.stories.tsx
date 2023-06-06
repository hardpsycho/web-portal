import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/stoybook/decorators/local/ThemeDecorator'
import { CircleLoader, CircleLoaderVariant } from './CircleLoader'

export default {
    title: 'shared/CircleLoader',
    component: CircleLoader,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        children: 'Text'
    }
} as ComponentMeta<typeof CircleLoader>

const Template: ComponentStory<typeof CircleLoader> = (args) => (
    <CircleLoader {...args} />
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BgColor = Template.bind({})
BgColor.args = {
    variant: CircleLoaderVariant.BG_COLOR
}
BgColor.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BgColorDark = Template.bind({})
BgColorDark.args = {
    variant: CircleLoaderVariant.BG_COLOR
}
BgColorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvetedColor = Template.bind({})
InvetedColor.args = {
    variant: CircleLoaderVariant.INVERTED_COLOR
}
InvetedColor.decorators = [ThemeDecorator(Theme.LIGHT)]

export const InvertedColorDark = Template.bind({})
InvertedColorDark.args = {
    variant: CircleLoaderVariant.INVERTED_COLOR
}
InvertedColorDark.decorators = [ThemeDecorator(Theme.DARK)]
