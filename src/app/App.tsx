import { Suspense } from 'react'
import { classNames } from 'shared/libs/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './router'
import { CircleLoader } from 'shared/ui/CircleLoader'
import './styles/index.scss'
import 'shared/config/i18n/config'

export const App = () => {
    const { currentTheme } = useTheme()

    return (
        <div className={classNames('app', [currentTheme])}>
            <Suspense fallback={<CircleLoader className="main-loader" />}>
                <Navbar />
                <div className={'page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
