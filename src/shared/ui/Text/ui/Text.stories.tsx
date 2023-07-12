import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/stoybook/decorators/local/ThemeDecorator'
import { Text, TextMode, TextVariant } from './Text'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        children: 'Вот такой вот текст'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Title = Template.bind({})
Title.args = {
    variant: TextVariant.TITLE
}

export const Error = Template.bind({})
Error.args = {
    mode: TextMode.ERROR
}
