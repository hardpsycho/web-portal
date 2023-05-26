import { classNames } from 'shared/libs/classNames'
import styles from './ThemeSwitcher.m.scss'
import { type FC } from 'react'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import ThemeIconDark from 'shared/assets/icons/theme-dark.svg'
import ThemeIconLight from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonVariant } from 'shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
    const {currentTheme, toggleTheme} = useTheme()

    return (
        <Button 
            className={classNames(styles.themeSwitcher, [className])}
            onClick={toggleTheme}
            variant={ButtonVariant.CLEAR}
        >
            {
                currentTheme === Theme.DARK ? <ThemeIconLight /> : <ThemeIconDark />
            }
        </Button>
    )
}