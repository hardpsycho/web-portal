import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/stoybook/decorators/local/ThemeDecorator'
import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a assumenda beatae laudantium aspernatur? Quaerat tempore eos nisi veniam nulla iusto dicta velit quos veritatis eveniet! Aut explicabo ipsam excepturi?'
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a assumenda beatae laudantium aspernatur? Quaerat tempore eos nisi veniam nulla iusto dicta velit quos veritatis eveniet! Aut explicabo ipsam excepturi?'
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
