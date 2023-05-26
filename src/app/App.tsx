import { Suspense } from 'react'
import { classNames } from 'shared/libs/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './router'
import './styles/index.scss'

export const App = () => {
    const {currentTheme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', [currentTheme])}>
            <Suspense fallback='<div>Loading...</div>'>
                <Navbar />
                <AppRouter />
                <ThemeSwitcher />
            </Suspense>
        </div>
    )
}
