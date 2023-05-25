import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './AppLink.m.scss'
import { Link, LinkProps } from 'react-router-dom'

export const AppLinkVariant = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
} as const

export type AppLinkVariant = typeof AppLinkVariant[keyof typeof AppLinkVariant]

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
            to={to}
            className={classNames(styles.appLink, [className, styles[variant]])}
            {...other}
        >
            {children}
        </Link>
    )
}