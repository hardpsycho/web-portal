import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './Text.m.scss'

export const TextVariant = {
    TITLE: 'title'
} as const

export type TextVariant = (typeof TextVariant)[keyof typeof TextVariant]

export const TextMode = {
    STANDART: 'standart',
    ERROR: 'error'
} as const

export type TextMode = (typeof TextMode)[keyof typeof TextMode]

interface TextProps {
    className?: string
    variant?: TextVariant
    mode?: TextMode
}

export const Text: FC<TextProps> = ({
    className = '',
    mode = TextMode.STANDART,
    variant = '',
    children
}) => {
    return (
        <p
            className={classNames(styles.text, [
                className,
                styles[variant],
                styles[mode]
            ])}
        >
            {children}
        </p>
    )
}
