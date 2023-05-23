import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './Navbar.m.scss'
import { AppLink } from 'shared/ui/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    if(typeof className === 'string'){

    }

    return (
        <div className={classNames(styles.navbar, [className])}>
            <div className={classNames(styles.menu)}>
                <AppLink  className={classNames(styles.link)} to='/'>Главная</AppLink>
                <AppLink  className={classNames(styles.link)} to='/about'>О нас</AppLink>
            </div>
        </div>
    )
}