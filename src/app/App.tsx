import { Suspense } from 'react'
import { classNames } from 'shared/libs/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { CircleLoader } from 'shared/ui/CircleLoader'
import { AppRouter } from 'app/router'
import 'shared/config/i18n/config'
import './styles/index.scss'

export const App = () => {

    return (
        <div className={classNames('app')}>
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
