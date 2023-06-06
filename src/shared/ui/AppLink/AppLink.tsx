import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './AppLink.m.scss'
import { Link, LinkProps } from 'react-router-dom'

export const AppLinkVariant = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    INVERTED_PRIMARY: 'inverted-primary',
    INVERTED_SECONDARY: 'inverted-secondary'
} as const

export type AppLinkVariant =
    (typeof AppLinkVariant)[keyof typeof AppLinkVariant]

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        className = '',
        variant = AppLinkVariant.PRIMARY,
        ...other
    } = props

    return (
        <Link
            {...other}
            to={to}
            className={classNames('', [className, styles[variant]])}
        >
            {children}
        </Link>
    )
}
