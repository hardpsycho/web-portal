import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CircleLoader } from 'shared/ui/CircleLoader'
import { routerConfig } from 'shared/config/router/config/routerConfig'

export const AppRouter = () => {
    return (
        <main className={'main-content'}>
            <Suspense fallback={<CircleLoader />}>
                <Routes>
                    {Object.values(routerConfig).map(({ path, element }) => {
                        return (
                            <Route key={path} path={path} element={element} />
                        )
                    })}
                </Routes>
            </Suspense>
        </main>
    )
}
