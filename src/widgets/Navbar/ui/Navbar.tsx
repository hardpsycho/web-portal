import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './Navbar.m.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    return (
        <header className={classNames(styles.navbar, [className])}>
            <div className={classNames(styles.menu)}>
                /
            </div>
        </header>
    )
}
