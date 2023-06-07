import { classNames } from 'shared/libs/classNames'
import styles from './Button.m.scss'

import type { ButtonHTMLAttributes, FC } from 'react'

export const ButtonVariant = {
    CLEAR: 'clear',
    OUTLINE: 'outline',
    BACKGROUND: 'background',
    BACKGROUND_INVERTED: 'background-inverted'
} as const

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant]

export const ButtonSize = {
    S: 'small',
    M: 'middle',
    L: 'large',
    XL: 'extra-large'
} as const

export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize]

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        variant = ButtonVariant.OUTLINE,
        square = false,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [styles.square]: square
    }

    return (
        <button
            {...otherProps}
            className={classNames(
                styles.button,
                [className, styles[variant], styles[size]],
                mods
            )}
        >
            {children}
        </button>
    )
}
