import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/stoybook/decorators/local/ThemeDecorator'
import { Button, ButtonSize, ButtonVariant } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        children: 'Text'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearSizeM = Template.bind({})
ClearSizeM.args = {
    variant: ButtonVariant.CLEAR,
    size: ButtonSize.M
}

export const OutlineSizeM = Template.bind({})
OutlineSizeM.args = {
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.M
}

export const BackgroundSizeM = Template.bind({})
BackgroundSizeM.args = {
    variant: ButtonVariant.BACKGROUND,
    size: ButtonSize.M
}

export const BackgroundInvertedSizeM = Template.bind({})
BackgroundInvertedSizeM.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    size: ButtonSize.M
}

export const ClearSizeL = Template.bind({})
ClearSizeL.args = {
    variant: ButtonVariant.CLEAR,
    size: ButtonSize.L
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.L
}

export const BackgroundSizeL = Template.bind({})
BackgroundSizeL.args = {
    variant: ButtonVariant.BACKGROUND,
    size: ButtonSize.L
}

export const BackgroundInvertedSizeL = Template.bind({})
BackgroundInvertedSizeL.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    size: ButtonSize.L
}

export const ClearSizeXl = Template.bind({})
ClearSizeXl.args = {
    variant: ButtonVariant.CLEAR
}

export const OutlineSizeXl = Template.bind({})
OutlineSizeXl.args = {
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.XL
}

export const BackgroundSizeXl = Template.bind({})
BackgroundSizeXl.args = {
    variant: ButtonVariant.BACKGROUND,
    size: ButtonSize.XL
}

export const BackgroundInvertedSizeXl = Template.bind({})
BackgroundInvertedSizeXl.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    size: ButtonSize.XL
}

export const SquareOutlineSizeM = Template.bind({})
SquareOutlineSizeM.args = {
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.M,
    square: true,
    children: '>'
}

export const SquareBackgroundSizeM = Template.bind({})
SquareBackgroundSizeM.args = {
    variant: ButtonVariant.BACKGROUND,
    size: ButtonSize.M,
    square: true,
    children: '>'
}

export const SquareBackgroundInvertedSizeM = Template.bind({})
SquareBackgroundInvertedSizeM.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    square: true,
    children: '>'
}

export const SquareOutlineSizeL = Template.bind({})
SquareOutlineSizeL.args = {
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.L,
    square: true,
    children: '>'
}

export const SquareBackgroundSizeL = Template.bind({})
SquareBackgroundSizeL.args = {
    variant: ButtonVariant.BACKGROUND,
    size: ButtonSize.L,
    square: true,
    children: '>'
}

export const SquareBackgroundInvertedSizeL = Template.bind({})
SquareBackgroundInvertedSizeL.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
    children: '>'
}

export const SquareOutlineSizeXL = Template.bind({})
SquareOutlineSizeXL.args = {
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.XL,
    square: true,
    children: '>'
}

export const SquareBackgroundSizeXL = Template.bind({})
SquareBackgroundSizeXL.args = {
    variant: ButtonVariant.BACKGROUND,
    size: ButtonSize.XL,
    square: true,
    children: '>'
}

export const SquareBackgroundInvertedSizeXL = Template.bind({})
SquareBackgroundInvertedSizeXL.args = {
    variant: ButtonVariant.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
    children: '>'
}
