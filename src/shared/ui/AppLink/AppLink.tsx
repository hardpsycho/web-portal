import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './AppLink.m.scss'
import { Link, LinkProps } from 'react-router-dom'

export const AppLinkTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
} as const

export type AppLinkTheme = typeof AppLinkTheme[keyof typeof AppLinkTheme]

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { 
        children,
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...other
    } = props

    return (
        <Link 
            to={to}
            className={classNames(styles.appLink, [className, styles[theme]])}
            {...other}
        >
            {children}
        </Link>
    )
}