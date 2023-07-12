import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/stoybook/decorators/local/StoreDecorator'
import { ThemeDecorator } from 'shared/config/stoybook/decorators/local/ThemeDecorator'
import { Navbar } from './Navbar'

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { isAuth: false } })
]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { isAuth: false } })
]
