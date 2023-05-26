import { Suspense } from 'react'
import { classNames } from 'shared/libs/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './router'
import './styles/index.scss'

export const App = () => {
    const { currentTheme}  = useTheme()

    return (
        <div className={classNames('app', [currentTheme])}>
            <Suspense fallback='<div>Loading...</div>'>
                <Navbar />
                <div className={'page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
