import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './Navbar.m.scss'
import { NavLink } from 'react-router-dom'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    if(typeof className === 'string'){

    }

    return (
        <div className={classNames(styles.navbar, [className])}>
            <div className={classNames(styles.menu)}>
                <NavLink  className={classNames(styles.link)} to='/'>Главная</NavLink>
                <NavLink  className={classNames(styles.link)} to='/about'>О нас</NavLink>
            </div>
        </div>
    )
}