import { classNames } from 'shared/libs/classNames'
import styles from './Button.m.scss'

import type { ButtonHTMLAttributes, FC } from 'react'

export const ButtonVariant = {
    CLEAR: 'clear',
    OUTLINE: 'outline'
} as const

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant]

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        variant = ButtonVariant.CLEAR,
        ...otherProps
    } = props
    return (
        <button
            {...otherProps}
            className={classNames(styles.button, [className, styles[variant]])}
        >
            {children}
        </button>
    )
}
