import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { classNames } from 'shared/libs/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { userStateActions } from 'entities/user'
import { CircleLoader } from 'shared/ui/CircleLoader'
import { AppRouter } from 'app/router'
import 'shared/config/i18n/config'
import './styles/index.scss'

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userStateActions.initAuth())
    }, [dispatch])

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
