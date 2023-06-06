import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/stoybook/decorators/local/ThemeDecorator'
import { AppLink, AppLinkVariant } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        children: 'Link',
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ThemeDecorator(Theme.LIGHT)]

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
Default.decorators = [ThemeDecorator(Theme.DARK)]

export const Primary = Template.bind({})
Primary.args = {
    variant: AppLinkVariant.PRIMARY
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    variant: AppLinkVariant.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
    variant: AppLinkVariant.PRIMARY
}
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    variant: AppLinkVariant.PRIMARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedPrimary = Template.bind({})
InvertedPrimary.args = {
    variant: AppLinkVariant.PRIMARY
}
InvertedPrimary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const InvertedPrimaryDark = Template.bind({})
InvertedPrimaryDark.args = {
    variant: AppLinkVariant.INVERTED_PRIMARY
}
InvertedPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedSecondary = Template.bind({})
InvertedSecondary.args = {
    variant: AppLinkVariant.INVERTED_SECONDARY
}
InvertedSecondary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const InvertedSecondaryDark = Template.bind({})
InvertedSecondaryDark.args = {
    variant: AppLinkVariant.INVERTED_SECONDARY
}
InvertedSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
